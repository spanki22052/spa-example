import React from "react"
import { LeftOutlined, LogoutOutlined, SunOutlined, MoonOutlined } from "@ant-design/icons"
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
          <Styled.SidebarHeaderMain>
            <Styled.SidebarLogo $collapsed={collapsed} $isHovered={isHovered}>
              <div>CRM</div>
            </Styled.SidebarLogo>
            <Styled.SidebarTitle $collapsed={collapsed} $isHovered={isHovered}>
              CRM System
            </Styled.SidebarTitle>
          </Styled.SidebarHeaderMain>
          <Styled.SidebarCollapseButton $collapsed={collapsed} $isHovered={isHovered} onClick={onToggle}>
            <LeftOutlined />
          </Styled.SidebarCollapseButton>
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
          <Styled.MenuItem
            $collapsed={collapsed}
            $isHovered={isHovered}
            $active={false}
            $isLogout={false}
            onClick={toggleTheme}
          >
            {themeMode === "dark" ? <SunOutlined /> : <MoonOutlined />}
            <Styled.MenuItemLabel $collapsed={collapsed} $isHovered={isHovered}>
              {themeMode === "dark" ? "Светлая тема" : "Темная тема"}
            </Styled.MenuItemLabel>
          </Styled.MenuItem>
          <Styled.MenuItem
            $collapsed={collapsed}
            $isHovered={isHovered}
            $active={false}
            $isLogout={true}
            onClick={onLogout}
          >
            <LogoutOutlined />
            <Styled.MenuItemLabel $collapsed={collapsed} $isHovered={isHovered}>
              Выйти
            </Styled.MenuItemLabel>
          </Styled.MenuItem>
        </Styled.SidebarContent>
      </Styled.SidebarContainer>
    </>
  )
}

