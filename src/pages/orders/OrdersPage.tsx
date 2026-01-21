import React from "react"
import { FileTextOutlined } from "@ant-design/icons"
import * as Styled from "./styled"
import { useOrdersPage } from "./useOrdersPage"
import type { OrdersPageProps } from "./types"
import { OrderDetailsModal } from "@components/orderDetailsModal/OrderDetailsModal"
import { OrdersTable } from "@components/ordersTable/OrdersTable"

export const OrdersPage: React.FC<OrdersPageProps> = () => {
  const {
    orders,
    pagination,
    loading,
    error,
    isMobile,
    selectedOrder,
    isModalOpen,
    handlePageChange,
    handleRowClick,
    handleCloseModal,
    refetch
  } = useOrdersPage()

  if (error && orders.length === 0 && !loading) {
    return (
      <Styled.OrdersContent>
        <Styled.PageHeader>
          <Styled.PageTitleWrapper>
            <Styled.TitleIcon>
              <FileTextOutlined />
            </Styled.TitleIcon>
            <Styled.PageTitle>Список заявок</Styled.PageTitle>
          </Styled.PageTitleWrapper>
        </Styled.PageHeader>
        <Styled.ErrorContainer>
          <Styled.StyledAlert
            message="Ошибка загрузки данных"
            description={error}
            type="error"
            showIcon
            action={
              <Styled.RetryButton type="primary" onClick={() => refetch()}>
                Повторить попытку
              </Styled.RetryButton>
            }
          />
        </Styled.ErrorContainer>
      </Styled.OrdersContent>
    )
  }

  if (loading && orders.length === 0) {
    return (
      <Styled.OrdersContent>
        <Styled.PageHeader>
          <Styled.PageTitleWrapper>
            <Styled.TitleIcon>
              <FileTextOutlined />
            </Styled.TitleIcon>
            <Styled.PageTitle>Список заявок</Styled.PageTitle>
          </Styled.PageTitleWrapper>
        </Styled.PageHeader>
        <Styled.LoadingContainer>
          <Styled.StyledSpin size="large" tip="Загрузка данных..." />
        </Styled.LoadingContainer>
      </Styled.OrdersContent>
    )
  }

  return (
    <Styled.OrdersContent>
      <Styled.PageHeader>
        <Styled.PageTitleWrapper>
          <Styled.TitleIcon>
            <FileTextOutlined />
          </Styled.TitleIcon>
          <Styled.PageTitle>Список заявок</Styled.PageTitle>
        </Styled.PageTitleWrapper>
      </Styled.PageHeader>
      {error && (
        <Styled.ErrorAlert
          message="Ошибка загрузки данных"
          description={error}
          type="error"
          showIcon
          closable
        />
      )}
      <Styled.TableWrapper>
        <OrdersTable
          orders={orders}
          loading={loading}
          pagination={pagination}
          isMobile={isMobile}
          onPageChange={handlePageChange}
          onRowClick={handleRowClick}
        />
      </Styled.TableWrapper>
      <OrderDetailsModal order={selectedOrder} open={isModalOpen} onClose={handleCloseModal} />
    </Styled.OrdersContent>
  )
}
