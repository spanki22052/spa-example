import { useCallback } from "react"

export const useOrderDetailsModal = () => {
  const formatDate = useCallback((dateString: string): string => {
    if (!dateString) return ""
    
    try {
      const date = new Date(dateString)
      if (isNaN(date.getTime())) {
        return dateString
      }
      return date.toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      })
    } catch {
      return dateString
    }
  }, [])

  const parseDateString = useCallback((dateString: string): string => {
    if (!dateString) return ""
    
    const parts = dateString.split(".")
    if (parts.length === 3) {
      const [day, month, year] = parts
      return `${year}-${month}-${day}`
    }
    return dateString
  }, [])

  const formatOrderDate = useCallback((orderDate: { type: "urgent" | "nonUrgent"; urgentDate: string; nonUrgentStartDate: string; nonUrgentEndDate: string }): { text: string; isUrgent: boolean; dateRange?: string } => {
    if (orderDate.type === "urgent" && orderDate.urgentDate) {
      const parsedDate = parseDateString(orderDate.urgentDate)
      return {
        text: orderDate.urgentDate,
        isUrgent: true
      }
    }
    
    if (orderDate.nonUrgentStartDate && orderDate.nonUrgentEndDate) {
      return {
        text: `С ${orderDate.nonUrgentStartDate} по ${orderDate.nonUrgentEndDate}`,
        isUrgent: false,
        dateRange: `${orderDate.nonUrgentStartDate} - ${orderDate.nonUrgentEndDate}`
      }
    }
    
    return {
      text: "Не указано",
      isUrgent: false
    }
  }, [parseDateString])

  return {
    formatDate,
    formatOrderDate
  }
}

