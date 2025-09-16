import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/landing/HeroSection";

export default function Home() {
  return (
   <div className="bg-white dark:bg-black/5 overflow-x-hidden">
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen px-6 lg:px-4 gap-4 sm:gap-12">
      <HeroSection />

    </div>

   </div>
  );
}
