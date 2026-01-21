import { useCallback, useMemo } from "react"
import type { OrderDate } from "../../@types/orders"
import type { FormattedOrderDate } from "./types"

export const useOrderDetailsModal = (orderDate?: OrderDate, phoneNumber?: string) => {
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

  const formatOrderDate = useCallback((orderDate: OrderDate): FormattedOrderDate => {
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

  const orderDateInfo = useMemo(() => {
    if (!orderDate) {
      return { text: "Не указано", isUrgent: false }
    }
    return formatOrderDate(orderDate)
  }, [orderDate, formatOrderDate])

  const handleCallClick = useCallback(() => {
    if (!phoneNumber) return
    window.open(`tel:${phoneNumber}`, "_self")
  }, [phoneNumber])

  const handleWhatsappClick = useCallback(() => {
    if (!phoneNumber) return
    const digitsOnly = phoneNumber.replace(/\D/g, "")
    if (!digitsOnly) return
    window.open(`https://wa.me/${digitsOnly}`, "_blank")
  }, [phoneNumber])

  return {
    formatDate,
    formatOrderDate,
    orderDateInfo,
    handleCallClick,
    handleWhatsappClick
  }
}

