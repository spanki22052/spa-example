import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://gocrm.gruzoperevozki-rf.com"

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
})

export const AUTH_TOKEN_KEY = "authToken"

const getToken = (): string | null => {
  return localStorage.getItem(AUTH_TOKEN_KEY)
}

const setToken = (token: string): void => {
  localStorage.setItem(AUTH_TOKEN_KEY, token)
}

apiClient.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers = config.headers || {}
      config.headers.jwt_token = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  (response) => {
    const data = response.data as { jwt_token?: string }
    if (data?.jwt_token) {
      setToken(data.jwt_token)
    }
    return response
  },
  (error) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      localStorage.removeItem(AUTH_TOKEN_KEY)
    }
    return Promise.reject(error)
  }
)

