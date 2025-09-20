"use client";

import { useState } from "react";
import { motion, Transition } from "motion/react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface Avatar {
  id: number;
  svg: React.ReactNode;
  alt: string;
}

const avatars: Avatar[] = [
  // Your SVG avatars here (keep as-is)
  { id: 1, svg: <svg>...</svg>, alt: "Avatar 1" },
  { id: 2, svg: <svg>...</svg>, alt: "Avatar 4" },
  { id: 3, svg: <svg>...</svg>, alt: "Avatar 2" },
  { id: 4, svg: <svg>...</svg>, alt: "Avatar 3" },
];

// ✅ Typed spring transition
const springTransition: Transition = {
  type: "spring" as const,
  stiffness: 200,
  damping: 20,
};

// ✅ Variants
const mainAvatarVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: springTransition },
  exit: { y: -20, opacity: 0, transition: { duration: 0.2 } },
} as const;

const pickerVariants = {
  container: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  },
  item: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: springTransition },
  },
} as const;

const selectedVariants = {
  initial: { opacity: 0, rotate: -180 },
  animate: { opacity: 1, rotate: 0, transition: springTransition },
  exit: { opacity: 0, rotate: 180, transition: { duration: 0.2 } },
} as const;

export default function AvatarPicker() {
  const [selectedAvatar, setSelectedAvatar] = useState<Avatar>(avatars[0]);
  const [rotationCount, setRotationCount] = useState(0);

  const handleAvatarSelect = (avatar: Avatar) => {
    setRotationCount((prev) => prev + 1080); // 3 rotations
    setSelectedAvatar(avatar);
  };

  return (
    <motion.div initial="initial" animate="animate" className="w-full">
      <Card className="w-full max-w-md mx-auto overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <CardContent className="p-0">
          {/* Background header */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "8rem",
              transition: { height: { type: "spring" as const, stiffness: 100, damping: 20 } },
            }}
            className="bg-gradient-to-r from-primary/20 to-primary/10 w-full"
          />

          <div className="px-8 pb-8 -mt-16">
            {/* Main avatar display */}
            <motion.div
              className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 bg-background flex items-center justify-center"
              variants={mainAvatarVariants}
              layoutId="selectedAvatar"
            >
              <motion.div
                className="w-full h-full flex items-center justify-center scale-[3]"
                animate={{ rotate: rotationCount }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                {selectedAvatar.svg}
              </motion.div>
            </motion.div>

            {/* Username */}
            <motion.div className="text-center mt-4" variants={pickerVariants.item}>
              <motion.h2
                className="text-2xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Me
              </motion.h2>
              <motion.p
                className="text-muted-foreground text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Select your avatar
              </motion.p>
            </motion.div>

            {/* Avatar selection */}
            <motion.div className="mt-6" variants={pickerVariants.container}>
              <motion.div className="flex justify-center gap-4" variants={pickerVariants.container}>
                {avatars.map((avatar) => (
                  <motion.button
                    key={avatar.id}
                    onClick={() => handleAvatarSelect(avatar)}
                    className={cn(
                      "relative w-12 h-12 rounded-full overflow-hidden border-2",
                      "transition-all duration-300"
                    )}
                    variants={pickerVariants.item}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    whileTap={{ y: 0, transition: { duration: 0.2 } }}
                    aria-label={`Select ${avatar.alt}`}
                    aria-pressed={selectedAvatar.id === avatar.id}
                  >
                    <div className="w-full h-full flex items-center justify-center">{avatar.svg}</div>
                    {selectedAvatar.id === avatar.id && (
                      <motion.div
                        className="absolute inset-0 bg-primary/20 ring-2 ring-primary ring-offset-2 ring-offset-background rounded-full"
                        variants={selectedVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        layoutId="selectedIndicator"
                      />
                    )}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
