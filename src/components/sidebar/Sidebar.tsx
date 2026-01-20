import React from "react"
import { MenuFoldOutlined, MenuUnfoldOutlined, LogoutOutlined, SunOutlined, MoonOutlined } from "@ant-design/icons"
import * as Styled from "./styled"
import type { SidebarProps } from "./types"
import { useSidebar } from "./useSidebar"
import { useTheme } from "@contexts/ThemeContext"

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, menuItems, onToggle, onMenuClick, isActiveRoute, onLogout }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useSidebar()
  const { themeMode, toggleTheme } = useTheme()

  return (
    <>
      <Styled.SidebarOverlay $collapsed={collapsed} onClick={onToggle} />
      <Styled.SidebarContainer
        $collapsed={collapsed}
        $isHovered={isHovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Styled.SidebarHeader>
          <Styled.SidebarLogo $collapsed={collapsed} $isHovered={isHovered}>
            <div>CRM</div>
          </Styled.SidebarLogo>
          <Styled.SidebarTitle $collapsed={collapsed} $isHovered={isHovered}>
            CRM System
          </Styled.SidebarTitle>
        </Styled.SidebarHeader>
        <Styled.SidebarContent>
          {menuItems.map((item) => (
            <Styled.MenuItem
              key={item.key}
              $collapsed={collapsed}
              $isHovered={isHovered}
              $active={isActiveRoute(item.path)}
              onClick={() => {
                onMenuClick(item.path)
              }}
            >
              {item.icon}
              <Styled.MenuItemLabel $collapsed={collapsed} $isHovered={isHovered}>
                {item.label}
              </Styled.MenuItemLabel>
            </Styled.MenuItem>
          ))}
        </Styled.SidebarContent>
        <Styled.SidebarFooter>
          <Styled.ThemeToggleButton onClick={toggleTheme} $collapsed={collapsed} $isHovered={isHovered}>
            {themeMode === "dark" ? <SunOutlined /> : <MoonOutlined />}
            <span>{themeMode === "dark" ? "Светлая тема" : "Темная тема"}</span>
          </Styled.ThemeToggleButton>
          <Styled.ToggleButton onClick={onToggle} $collapsed={collapsed} $isHovered={isHovered}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            <span>Свернуть</span>
          </Styled.ToggleButton>
          <Styled.LogoutButton onClick={onLogout} $collapsed={collapsed} $isHovered={isHovered}>
            <LogoutOutlined />
            <span>Выйти</span>
          </Styled.LogoutButton>
        </Styled.SidebarFooter>
      </Styled.SidebarContainer>
    </>
  )
}

