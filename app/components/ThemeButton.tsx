"use client";
import React from "react";

import { useTheme } from "@/app/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeButton = () => {
  const { dark, toggleTheme } = useTheme();
  return (
    <div
      onClick={toggleTheme}
      className="cursor-pointer w-[40px] h-[40px] rounded-lg bg-gray-200 p-2 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    >
      {dark ? <Sun /> : <Moon />}
    </div>
  );
};

export default ThemeButton;
