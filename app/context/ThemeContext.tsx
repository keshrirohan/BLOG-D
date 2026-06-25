"use client";
import { createContext, useContext, useState, ReactNode } from "react";

import React from "react";
type ThemeContextType = {
  dark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [dark, setdark] = useState<boolean>(false);

  const toggleTheme = () => {
    setdark((prev) => {
      const newTheme = !prev;
      document.documentElement.classList.toggle("dark", newTheme);
      console.log("Theme toggled to:", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  //we are checking if the context is undefined, which means that the component is not wrapped in a ThemeContextProvider
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  // we are returning the context, which contains the dark state and the toggleTheme function, so that we can use them in our components
  return context;
};

export { useTheme };
export default ThemeContextProvider;
