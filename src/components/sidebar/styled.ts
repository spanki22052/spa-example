import styled from "styled-components"

export const SidebarContainer = styled.div<{ $collapsed: boolean; $isHovered: boolean }>(({ $collapsed, $isHovered, theme }) => ({
  width: $collapsed && !$isHovered ? "72px" : "260px",
  backgroundColor: theme.colors.surface,
  display: "flex",
  flexDirection: "column",
  paddingTop: "20px",
  borderRight: `1px solid ${theme.colors.border}`,
  transition: "width 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  zIndex: 10,
  borderRadius: "24px",
  overflow: "hidden",
  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.12)",
  alignSelf: "flex-start",
  "@media (max-width: 768px)": {
    position: "fixed",
    left: $collapsed ? "-260px" : "0",
    top: 0,
    bottom: 0,
    height: "100vh",
    margin: 0,
    borderRadius: 0,
    zIndex: 1000,
    width: "260px",
    transition: "left 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
  },
  "@media (min-width: 769px)": {
    "&:hover": {
      width: $collapsed && $isHovered ? "260px" : undefined
    }
  }
}))

export const SidebarHeader = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 18px",
  minHeight: "64px",
  borderBottom: `1px solid ${theme.colors.border}`
}))

export const SidebarHeaderMain = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  minWidth: 0
}))

export const SidebarLogo = styled.div<{ $collapsed: boolean; $isHovered: boolean }>(({ $collapsed, $isHovered, theme }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "10px",
  backgroundColor: theme.colors.primary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.colors.white,
  fontSize: "18px",
  fontWeight: 700,
  flexShrink: 0,
  opacity: $collapsed && !$isHovered ? 1 : 1
}))

export const SidebarTitle = styled.h2<{ $collapsed: boolean; $isHovered: boolean }>(({ $collapsed, $isHovered, theme }) => ({
  color: theme.colors.text,
  fontSize: "18px",
  fontWeight: 600,
  margin: 0,
  letterSpacing: "-0.01em",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  opacity: $collapsed && !$isHovered ? 0 : 1,
  transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  maxWidth: $collapsed && !$isHovered ? 0 : "100%"
}))

export const SidebarCollapseButton = styled.button<{ $collapsed: boolean; $isHovered: boolean }>(({ $collapsed, $isHovered, theme }) => {
  const baseRotation = $collapsed ? "180deg" : "0deg"
  const hoverRotation = $collapsed ? "360deg" : "180deg"
  const currentRotation = $isHovered ? hoverRotation : baseRotation

  return {
    position: "absolute",
    top: "12px",
    right: "12px",
    width: "24px",
    height: "24px",
    borderRadius: "999px",
    border: "none",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: theme.colors.textSecondary,
    flexShrink: 0,
    transition: "background-color 0.2s ease, color 0.2s ease, transform 0.2s ease",
    transform: `rotate(${currentRotation})`,
    "&:hover": {
      backgroundColor: theme.colors.surfaceHover,
      color: theme.colors.text
    },
    "& svg": {
      fontSize: "16px"
    }
  }
})

export const SidebarContent = styled.div(({ theme }) => ({
  flex: 1,
  overflowY: "auto",
  overflowX: "hidden",
  padding: "8px 10px 12px",
  "&::-webkit-scrollbar": {
    width: "6px"
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent"
  },
  "&::-webkit-scrollbar-thumb": {
    background: theme.colors.scrollbarThumb,
    borderRadius: "3px",
    "&:hover": {
      background: theme.colors.scrollbarThumbHover
    }
  }
}))

export const MenuItem = styled.div<{ $collapsed: boolean; $isHovered: boolean; $active: boolean; $isLogout?: boolean }>(
  ({ $collapsed, $isHovered, $active, $isLogout, theme }) => ({
    padding: $collapsed && !$isHovered ? "10px" : "10px 14px",
    borderRadius: "999px",
    color: $active ? theme.colors.text : theme.colors.textSecondary,
    cursor: "pointer",
    marginBottom: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: $collapsed && !$isHovered ? "center" : "flex-start",
    gap: $collapsed && !$isHovered ? 0 : "12px",
    position: "relative",
    transition: "background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    backgroundColor: $active ? theme.colors.surfaceHover : "transparent",
    // В свернутом состоянии делаем элемент строго квадратным,
    // чтобы фон у активного пункта был идеально круглым
    ...($collapsed && !$isHovered
      ? {
          width: "40px",
          height: "40px",
          padding: 0,
          marginLeft: "auto",
          marginRight: "auto"
        }
      : {}),
    "&:hover": {
      backgroundColor: $isLogout ? theme.colors.danger : theme.colors.surfaceHover,
      color: $isLogout ? theme.colors.white : theme.colors.text
    },
    "& svg": {
      minWidth: "20px",
      fontSize: "20px",
      flexShrink: 0,
      transition: "color 0.2s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  })
)

export const MenuItemLabel = styled.span<{ $collapsed: boolean; $isHovered: boolean }>(({ $collapsed, $isHovered }) => ({
  fontSize: "14px",
  fontWeight: 500,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  flex: 1,
  opacity: $collapsed && !$isHovered ? 0 : 1,
  transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  maxWidth: $collapsed && !$isHovered ? 0 : "100%",
  display: $collapsed && !$isHovered ? "none" : "block"
}))

export const SidebarFooter = styled.div(({ theme }) => ({
  padding: "12px",
  borderTop: `1px solid ${theme.colors.border}`,
  display: "flex",
  flexDirection: "column",
  gap: "8px"
}))

export const LogoutButton = styled.button<{ $collapsed: boolean; $isHovered: boolean }>(({ $collapsed, $isHovered, theme }) => ({
  width: "100%",
  backgroundColor: "transparent",
  border: "none",
  color: theme.colors.textSecondary,
  cursor: "pointer",
  padding: $collapsed && !$isHovered ? "12px" : "12px 16px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 12,
  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
  fontSize: "14px",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: theme.colors.danger,
    color: theme.colors.white
  },
  "& svg": {
    minWidth: "20px",
    fontSize: "20px",
    flexShrink: 0,
    transition: "color 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  "& > span:not(:has(svg))": {
    fontSize: "14px",
    fontWeight: 500,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    opacity: $collapsed && !$isHovered ? 0 : 1,
    transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    maxWidth: $collapsed && !$isHovered ? 0 : "100%",
    display: $collapsed && !$isHovered ? "none" : "block"
  }
}))

export const ThemeToggleButton = styled.button<{ $collapsed: boolean; $isHovered: boolean }>(({ $collapsed, $isHovered, theme }) => ({
  width: "100%",
  backgroundColor: "transparent",
  border: "none",
  color: theme.colors.textSecondary,
  cursor: "pointer",
  padding: $collapsed && !$isHovered ? "12px" : "12px 16px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 12,
  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
  fontSize: "14px",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: theme.colors.surfaceHover,
    color: theme.colors.text
  },
  "& svg": {
    minWidth: "20px",
    fontSize: "20px",
    flexShrink: 0,
    transition: "color 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  "& > span:not(:has(svg))": {
    fontSize: "14px",
    fontWeight: 500,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    opacity: $collapsed && !$isHovered ? 0 : 1,
    transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    maxWidth: $collapsed && !$isHovered ? 0 : "100%",
    display: $collapsed && !$isHovered ? "none" : "block"
  }
}))

export const SidebarOverlay = styled.div<{ $collapsed: boolean }>(({ $collapsed, theme }) => ({
  display: "none",
  "@media (max-width: 768px)": {
    display: "block",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.overlay,
    zIndex: 999,
    transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    opacity: $collapsed ? 0 : 1,
    pointerEvents: $collapsed ? "none" : "auto"
  }
}))

