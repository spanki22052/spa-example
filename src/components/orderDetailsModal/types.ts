import type { Order, OrderDate } from "../../@types/orders"

export interface OrderDetailsModalProps {
  order: Order | null
  open: boolean
  onClose: () => void
}

export interface FormattedOrderDate {
  text: string
  isUrgent: boolean
  dateRange?: string
}

export type FormatOrderDateFn = (orderDate: OrderDate) => FormattedOrderDate

