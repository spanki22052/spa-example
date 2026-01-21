import type { Order, Pagination } from "../../@types/orders"

export interface OrdersTableProps {
  orders: Order[]
  loading: boolean
  pagination: Pagination | null
  isMobile: boolean
  onPageChange: (page: number, size: number) => void
  onRowClick: (order: Order) => void
}


