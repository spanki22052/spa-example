import React from "react"
import { AppstoreOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons"
import type { ServiceItem } from "./types"

export const SERVICES: ServiceItem[] = [
  {
    id: "orders",
    title: "Заказы",
    description: "Управление заказами, отслеживание статусов и обработка заявок",
    path: "/orders",
    icon: <AppstoreOutlined />,
    badge: {
      text: "Активно",
      variant: "success"
    },
    iconColor: "#1677ff"
  },
  {
    id: "clients",
    title: "Клиенты",
    description: "База данных клиентов, история взаимодействий и аналитика",
    path: "/crm/clients",
    icon: <UserOutlined />,
    badge: {
      text: "Скоро",
      variant: "warning"
    },
    iconColor: "#22c55e"
  },
  {
    id: "settings",
    title: "Настройки",
    description: "Конфигурация системы, управление пользователями и параметры",
    path: "/crm/settings",
    icon: <SettingOutlined />,
    badge: {
      text: "Скоро",
      variant: "warning"
    },
    iconColor: "#f59e0b"
  }
]

