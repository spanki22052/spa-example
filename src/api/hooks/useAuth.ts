import { useMutation } from "@tanstack/react-query"
import { authApi } from "@api/auth"
import type { LoginRequest, AuthResponse } from "../../@types/auth"

export const useAuth = () => {
  const loginMutation = useMutation<AuthResponse, Error, LoginRequest>({
    mutationFn: async (credentials: LoginRequest): Promise<AuthResponse> => {
      return await authApi.login(credentials)
    }
  })

  const logout = (): void => {
    authApi.logout()
  }

  return {
    login: loginMutation.mutateAsync,
    loginMutation,
    logout,
    isLoading: loginMutation.isPending,
    error: loginMutation.error
  }
}

