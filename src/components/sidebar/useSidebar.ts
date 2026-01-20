import { useState, useCallback, useEffect } from "react"

export const useSidebar = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const handleMouseEnter = useCallback((): void => {
    if (!isMobile) {
      setIsHovered(true)
    }
  }, [isMobile])

  const handleMouseLeave = useCallback((): void => {
    if (!isMobile) {
      setIsHovered(false)
    }
  }, [isMobile])

  return {
    isHovered,
    handleMouseEnter,
    handleMouseLeave
  }
}

