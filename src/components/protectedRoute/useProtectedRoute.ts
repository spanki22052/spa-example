import { useMemo } from "react"
import { AUTH_TOKEN_KEY } from "@api/clientApi"

export const useProtectedRoute = (): boolean => {
  const isAuthenticated = useMemo((): boolean => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY)
    return token !== null && token !== ""
  }, [])

  return isAuthenticated
}

