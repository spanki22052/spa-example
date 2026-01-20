import axios, { AxiosError } from "axios"
import { apiClient, AUTH_TOKEN_KEY } from "./clientApi"
import type { LoginRequest, AuthResponse, AuthErrorResponse } from "../@types/auth"

const setToken = (token: string): void => {
  localStorage.setItem(AUTH_TOKEN_KEY, token)
}

export const authApi = {
  login: async (credentials: LoginRequest): Promise<AuthResponse> => {
    try {
      const response = await apiClient.post<AuthResponse>("/crm/auth", credentials)
      if (response.data.jwt_token) {
        setToken(response.data.jwt_token)
      }
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<AuthErrorResponse>
        throw new Error(axiosError.response?.data?.message || "Ошибка авторизации")
      }
      throw new Error("Неизвестная ошибка при авторизации")
    }
  },
  logout: (): void => {
    localStorage.removeItem(AUTH_TOKEN_KEY)
  }
}

