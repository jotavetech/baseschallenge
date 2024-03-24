"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <div className="text-primary dark:text-primary-dark mx-2 lg:mx-5">
      <button
        className="hover:opacity-80 hover:scale-125"
        onClick={toggleTheme}
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
    </div>
  );
};

export default ModeToggle;
