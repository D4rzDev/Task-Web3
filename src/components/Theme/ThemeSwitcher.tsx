"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { PiSunDimBold } from "react-icons/pi";
import { RxMoon } from "react-icons/rx";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <button
      className={` p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-zinc-200 dark:bg-zinc-900`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ?<PiSunDimBold/>: <RxMoon/>}
    </button>
  );
};