import React from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { HomeOutlined, AppstoreOutlined, UserOutlined, SettingOutlined, MenuOutlined } from "@ant-design/icons"
import { Sidebar } from "@components/sidebar/Sidebar"
import type { MenuItemData } from "@components/sidebar/types"
import { useMainLayout } from "./useMainLayout"
import * as Styled from "./styled"
import type { MainLayoutProps } from "./types"

const menuItems: MenuItemData[] = [
  { key: "home", label: "Главная", icon: <HomeOutlined />, path: "/crm" },
  { key: "orders", label: "Заказы", icon: <AppstoreOutlined />, path: "/orders" },
  { key: "clients", label: "Клиенты", icon: <UserOutlined />, path: "/crm/clients" },
  { key: "settings", label: "Настройки", icon: <SettingOutlined />, path: "/crm/settings" }
]

export const MainLayout: React.FC<MainLayoutProps> = () => {
  const { sidebarCollapsed, toggleSidebar, handleMenuClick, isActiveRoute, handleLogout, isMobile } = useMainLayout()

  return (
    <Styled.LayoutContainer>
      <Sidebar
        collapsed={sidebarCollapsed}
        menuItems={menuItems}
        onToggle={toggleSidebar}
        onMenuClick={handleMenuClick}
        isActiveRoute={isActiveRoute}
        onLogout={handleLogout}
      />
      <Styled.MainContent $sidebarCollapsed={sidebarCollapsed}>
        {isMobile && (
          <Styled.MobileMenuButton onClick={toggleSidebar}>
            <MenuOutlined />
          </Styled.MobileMenuButton>
        )}
        <Outlet />
      </Styled.MainContent>
    </Styled.LayoutContainer>
  )
}

