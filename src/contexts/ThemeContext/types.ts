import type { Theme } from "@styles/theme"

export type ThemeMode = "dark" | "light"

export interface ThemeContextValue {
  theme: Theme
  themeMode: ThemeMode
  toggleTheme: () => void
}

