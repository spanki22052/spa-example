export interface LoginRequest {
  login: string
  password: string
}

export interface AuthResponse {
  status: string
  twofactor: string
  jwt_token: string
}

export interface AuthErrorResponse {
  message: string
  error?: string
}

