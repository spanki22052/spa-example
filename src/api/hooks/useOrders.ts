import { useQuery } from "@tanstack/react-query"
import { ordersApi } from "@api/orders"
import type { OrdersResponse } from "../../@types/orders"

interface UseOrdersParams {
  page?: number
  perPage?: number
  enabled?: boolean
}

export const useOrders = ({ page = 1, perPage = 10, enabled = true }: UseOrdersParams = {}) => {
  return useQuery<OrdersResponse, Error>({
    queryKey: ["orders", page, perPage],
    queryFn: async (): Promise<OrdersResponse> => {
      return await ordersApi.getOrders(page, perPage)
    },
    enabled
  })
}

