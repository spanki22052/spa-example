import type React from "react"

export interface MenuItemData {
  key: string
  label: string
  icon: React.ReactNode
  path: string
}

export interface SidebarProps {
  collapsed: boolean
  menuItems: MenuItemData[]
  onToggle: () => void
  onMenuClick: (path: string) => void
  isActiveRoute: (path: string) => boolean
  onLogout: () => void
}

