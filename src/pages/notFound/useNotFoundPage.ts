import { useNavigate } from "react-router-dom"

export const useNotFoundPage = () => {
  const navigate = useNavigate()

  const handleGoHome = (): void => {
    navigate("/login")
  }

  const handleGoBack = (): void => {
    navigate(-1)
  }

  return {
    handleGoHome,
    handleGoBack
  }
}

