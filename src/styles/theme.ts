export const darkTheme = {
  colors: {
    primary: "#df3d4a",
    primaryHover: "#c73541",
    background: "#0b1120",
    surface: "#020617",
    text: "#e5e7eb",
    textSecondary: "#9ca3af",
    danger: "#f97373",
    white: "#ffffff",
    border: "rgba(255, 255, 255, 0.08)",
    borderHover: "rgba(255, 255, 255, 0.1)",
    overlay: "rgba(0, 0, 0, 0.5)",
    primaryLight: "rgba(223, 61, 74, 0.15)",
    primaryLightHover: "rgba(223, 61, 74, 0.2)",
    surfaceHover: "rgba(255, 255, 255, 0.05)",
    scrollbarThumb: "rgba(255, 255, 255, 0.1)",
    scrollbarThumbHover: "rgba(255, 255, 255, 0.15)"
  },
  layout: {
    headerHeight: 64
  }
} as const

export const lightTheme = {
  colors: {
    primary: "#df3d4a",
    primaryHover: "#c73541",
    background: "#f5f5f5",
    surface: "#ffffff",
    text: "#1f2937",
    textSecondary: "#6b7280",
    danger: "#ef4444",
    white: "#ffffff",
    border: "rgba(0, 0, 0, 0.08)",
    borderHover: "rgba(0, 0, 0, 0.12)",
    overlay: "rgba(0, 0, 0, 0.3)",
    primaryLight: "rgba(223, 61, 74, 0.1)",
    primaryLightHover: "rgba(223, 61, 74, 0.15)",
    surfaceHover: "rgba(0, 0, 0, 0.04)",
    scrollbarThumb: "rgba(0, 0, 0, 0.2)",
    scrollbarThumbHover: "rgba(0, 0, 0, 0.3)"
  },
  layout: {
    headerHeight: 64
  }
} as const

export type Theme = typeof darkTheme
export type GlobalTheme = Theme


