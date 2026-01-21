import styled from "styled-components"

export const LayoutContainer = styled.div(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  backgroundColor: theme.colors.background,
  "@media (max-width: 768px)": {
    height: "100dvh",
    maxHeight: "100dvh"
  }
}))

export const MainContent = styled.div<{ $sidebarCollapsed: boolean }>(({ $sidebarCollapsed, theme }) => ({
  flex: 1,
  padding: "32px 40px",
  overflowY: "auto",
  backgroundColor: theme.colors.background,
  transition: "padding 0.3s cubic-bezier(0.4, 0, 0.2, 1), margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  boxSizing: "border-box",
  "@media (max-width: 768px)": {
    padding: "16px",
    paddingTop: "80px",
    width: "100%",
    marginLeft: 0,
    transition: "none",
    height: "100dvh",
    maxHeight: "100dvh"
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

export const MobileMenuButton = styled.button<{ $collapsed: boolean }>(({ theme, $collapsed }) => ({
  display: "none",
  "@media (max-width: 768px)": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    position: "fixed",
    top: "16px",
    right: "16px",
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    zIndex: 998,
    padding: "12px",
    transition: "all 0.3s ease",
    "& span": {
      display: "block",
      width: "24px",
      height: "2px",
      backgroundColor: theme.colors.primary,
      borderRadius: "2px",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      transformOrigin: "center"
    },
    "&:hover": {
      transform: "scale(1.05)",
      "& span": {
        backgroundColor: theme.colors.primaryHover
      }
    },
    "&:active": {
      transform: "scale(0.95)"
    }
  }
}))

export const BurgerLine = styled.span<{ $collapsed: boolean; $line: 1 | 2 | 3 }>(({ $collapsed, $line }) => {
  if (!$collapsed) {
    if ($line === 1) {
      return {
        transform: "rotate(45deg) translate(6px, 6px)"
      }
    }
    if ($line === 2) {
      return {
        opacity: 0,
        transform: "scaleX(0)"
      }
    }
    if ($line === 3) {
      return {
        transform: "rotate(-45deg) translate(6px, -6px)"
      }
    }
  }
  return {}
})

