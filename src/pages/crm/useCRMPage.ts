import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

export const useCRMPage = () => {
  const navigate = useNavigate()

  const handleServiceClick = useCallback(
    (path: string): void => {
      navigate(path)
    },
    [navigate]
  )

  return {
    handleServiceClick
  }
}

