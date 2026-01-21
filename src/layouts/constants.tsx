import React from "react"
import { HomeOutlined, AppstoreOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons"
import type { MenuItemData } from "@components/sidebar/types"

export const menuItems: MenuItemData[] = [
  { key: "home", label: "Главная", icon: <HomeOutlined />, path: "/crm" },
  { key: "orders", label: "Заказы", icon: <AppstoreOutlined />, path: "/orders" },
  { key: "clients", label: "Клиенты", icon: <UserOutlined />, path: "/crm/clients" },
  { key: "settings", label: "Настройки", icon: <SettingOutlined />, path: "/crm/settings" }
]

