import { useState, useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { message } from "antd"
import { useAuth } from "@api/hooks/useAuth"
import { AUTH_TOKEN_KEY } from "@api/clientApi"
import type { LoginFormValues, LoginFormErrors } from "./types"

export const useLoginForm = () => {
  const navigate = useNavigate()
  const { login, isLoading, error } = useAuth()
  const [errors, setErrors] = useState<LoginFormErrors>({})

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY)
    if (token) {
      navigate("/orders", { replace: true })
    }
  }, [navigate])

  const validateForm = useCallback((values: LoginFormValues): boolean => {
    const newErrors: LoginFormErrors = {}

    if (!values.login || values.login.trim() === "") {
      newErrors.login = "Введите логин"
    }

    if (!values.password || values.password.trim() === "") {
      newErrors.password = "Введите пароль"
    } else if (values.password.length < 8) {
      newErrors.password = "Пароль должен содержать минимум 8 символов"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [])

  const handleSubmit = useCallback(
    async (values: LoginFormValues): Promise<void> => {
      if (!validateForm(values)) {
        return
      }

      setErrors({})

      try {
        await login({
          login: values.login.trim(),
          password: values.password
        })

        navigate("/crm")
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : error?.message || "Ошибка авторизации"
        setErrors({ general: errorMessage })
        message.error(errorMessage)
      }
    },
    [validateForm, navigate, login, error]
  )

  return {
    loading: isLoading,
    errors,
    handleSubmit
  }
}

