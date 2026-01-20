import React from "react"
import { Navigate } from "react-router-dom"
import { useProtectedRoute } from "./useProtectedRoute"
import type { ProtectedRouteProps } from "./types"

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useProtectedRoute()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

