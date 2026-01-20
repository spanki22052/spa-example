import type { Order } from "../../@types/orders"

export interface OrderDetailsModalProps {
  order: Order | null
  open: boolean
  onClose: () => void
}

