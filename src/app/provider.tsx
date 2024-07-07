"use client";

import { ThemeProvider, useTheme } from "next-themes";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  if (theme !== "dark" && theme !== "light") {
    setTheme("light");
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
