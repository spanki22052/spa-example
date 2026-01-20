import styled from "styled-components"

export const LayoutContainer = styled.div(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  backgroundColor: theme.colors.background
}))

export const MainContent = styled.div<{ $sidebarCollapsed: boolean }>(({ $sidebarCollapsed, theme }) => ({
  flex: 1,
  padding: "32px 40px",
  overflowY: "auto",
  backgroundColor: theme.colors.background,
  transition: "padding 0.3s cubic-bezier(0.4, 0, 0.2, 1), margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  "@media (max-width: 768px)": {
    padding: "16px",
    paddingTop: "80px",
    width: "100%",
    marginLeft: 0,
    transition: "none"
  },
  "&::-webkit-scrollbar": {
    width: "8px"
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent"
  },
  "&::-webkit-scrollbar-thumb": {
    background: theme.colors.scrollbarThumb,
    borderRadius: "4px",
    "&:hover": {
      background: theme.colors.scrollbarThumbHover
    }
  }
}))

export const MobileMenuButton = styled.button(({ theme }) => ({
  display: "none",
  "@media (max-width: 768px)": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: "16px",
    left: "16px",
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    color: theme.colors.text,
    cursor: "pointer",
    zIndex: 998,
    fontSize: "20px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    "&:hover": {
      backgroundColor: theme.colors.surfaceHover,
      borderColor: theme.colors.primary,
      color: theme.colors.primary,
      transform: "scale(1.05)"
    },
    "&:active": {
      transform: "scale(0.95)"
    }
  }
}))

