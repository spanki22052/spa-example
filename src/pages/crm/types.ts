import type React from "react"

export interface CRMPageProps {}

export interface ServiceBadge {
  text: string
  variant: "primary" | "success" | "warning"
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  path: string
  icon: React.ReactNode
  badge?: ServiceBadge
  iconColor?: string
}

