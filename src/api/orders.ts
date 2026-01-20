import axios, { AxiosError } from "axios"
import { apiClient } from "./clientApi"
import type { OrdersResponse, OrdersErrorResponse } from "../@types/orders"

export const ordersApi = {
  getOrders: async (page: number = 1, perPage: number = 10): Promise<OrdersResponse> => {
    try {
      const response = await apiClient.get<OrdersResponse>("/crm/orders", {
        params: {
          page,
          per_page: perPage
        }
      })
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<OrdersErrorResponse>
        throw new Error(axiosError.response?.data?.message || "Ошибка загрузки заказов")
      }
      throw new Error("Неизвестная ошибка при загрузке заказов")
    }
  }
}

