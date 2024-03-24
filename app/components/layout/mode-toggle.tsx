"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";

const ModeToggle = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="text-primary dark:text-primary-dark">
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
