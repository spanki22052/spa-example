import React from "react"
import { Outlet } from "react-router-dom"
import { Sidebar } from "@components/sidebar/Sidebar"
import { useMainLayout } from "./useMainLayout"
import * as Styled from "./styled"
import type { MainLayoutProps } from "./types"
import { menuItems } from "./constants"

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
          <Styled.MobileMenuButton $collapsed={sidebarCollapsed} onClick={toggleSidebar}>
            <Styled.BurgerLine $collapsed={sidebarCollapsed} $line={1} />
            <Styled.BurgerLine $collapsed={sidebarCollapsed} $line={2} />
            <Styled.BurgerLine $collapsed={sidebarCollapsed} $line={3} />
          </Styled.MobileMenuButton>
        )}
        <Outlet />
      </Styled.MainContent>
    </Styled.LayoutContainer>
  )
}

