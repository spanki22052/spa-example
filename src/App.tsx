import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { LoginForm } from "./pages/login/LoginForm"
import { OrdersPage } from "./pages/orders/OrdersPage"
import { CRMPage } from "./pages/crm/CRMPage"
import { NotFoundPage } from "./pages/notFound/NotFoundPage"
import { MainLayout } from "./layouts/MainLayout"
import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute"

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/crm" element={<CRMPage />} />
      </Route>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}


