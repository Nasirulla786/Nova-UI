'use client'
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun, SunMoon } from "lucide-react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme(); // resolvedTheme is always 'light' or 'dark' on client
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevents SSR mismatch

  return (
    <div
      className="cursor-pointer"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {resolvedTheme === "light" ? (
        <Moon className="h-5 w-5 text-black" />
      ) : (
        <Sun className="h-5 w-5 text-white" />
      )}
    </div>
  );
}
