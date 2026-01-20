import { useState, useEffect, useCallback } from "react"
import { notification } from "antd"
import { useOrders } from "@api/hooks/useOrders"
import type { Order, Pagination } from "../../@types/orders"

export const useOrdersPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const {
    data: ordersResponse,
    isLoading,
    error: queryError,
    refetch
  } = useOrders({
    page: currentPage,
    perPage: pageSize
  })

  const orders: Order[] = ordersResponse?.status === "ok" ? ordersResponse.data : []
  const pagination: Pagination | null = ordersResponse?.status === "ok" ? ordersResponse.pagination : null
  const error: string | null = queryError?.message || null

  useEffect(() => {
    if (error) {
      notification.error({
        message: "Ошибка",
        description: error,
        placement: "topRight"
      })
    }
  }, [error])

  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const handlePageChange = useCallback((page: number, size: number): void => {
    setCurrentPage(page)
    setPageSize(size)
  }, [])

  const handleRowClick = useCallback((record: Order): void => {
    setSelectedOrder(record)
    setIsModalOpen(true)
  }, [])

  const handleCloseModal = useCallback((): void => {
    setIsModalOpen(false)
    setSelectedOrder(null)
  }, [])

  return {
    orders,
    pagination,
    loading: isLoading,
    error,
    currentPage,
    pageSize,
    isMobile,
    selectedOrder,
    isModalOpen,
    handlePageChange,
    handleRowClick,
    handleCloseModal,
    refetch
  }
}

