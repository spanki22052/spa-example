import { useState, useCallback, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { authApi } from "@api/auth"

export const useMainLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(true)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const checkMobile = (): void => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      if (mobile) {
        setSidebarCollapsed(true)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const toggleSidebar = useCallback((): void => {
    setSidebarCollapsed((prev) => !prev)
  }, [])

  const handleMenuClick = useCallback(
    (path: string): void => {
      navigate(path)
      if (isMobile) {
        setSidebarCollapsed(true)
      }
    },
    [navigate, isMobile]
  )

  const isActiveRoute = useCallback(
    (path: string): boolean => {
      return location.pathname === path
    },
    [location.pathname]
  )

  const handleLogout = useCallback((): void => {
    authApi.logout()
    navigate("/login")
  }, [navigate])

  return {
    sidebarCollapsed,
    toggleSidebar,
    handleMenuClick,
    isActiveRoute,
    handleLogout,
    isMobile
  }
}

