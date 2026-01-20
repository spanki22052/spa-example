import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { darkTheme, lightTheme } from "@styles/theme"
import { THEME_STORAGE_KEY } from "./constants"
import type { ThemeMode, ThemeContextValue } from "./types"

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null
    return saved || "light"
  })

  const theme = themeMode === "dark" ? darkTheme : lightTheme

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, themeMode)
  }, [themeMode])

  const toggleTheme = (): void => {
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return <ThemeContext.Provider value={{ theme, themeMode, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

