import React from "react"
import { Table } from "antd"
import type { TableProps } from "antd/es/table"
import { FileTextOutlined, InboxOutlined, FilterOutlined } from "@ant-design/icons"
import * as Styled from "./styled"
import { useOrdersPage } from "./useOrdersPage"
import type { OrdersPageProps } from "./types"
import { ORDER_COLUMNS, PAGE_SIZE_OPTIONS } from "./constants"
import { OrderDetailsModal } from "@components/orderDetailsModal/OrderDetailsModal"
import type { Order } from "../../@types/orders"

const TypedStyledTable = Styled.StyledTable as React.ComponentType<TableProps<Order>>

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
        <Styled.HeaderActions>
          {pagination && (
            <Styled.PageStats>
              <Styled.StatBadge>
                <Styled.StatLabel>Всего:</Styled.StatLabel>
                <Styled.StatValue>{pagination.totalitems}</Styled.StatValue>
              </Styled.StatBadge>
              <Styled.StatBadge>
                <Styled.StatLabel>Страница:</Styled.StatLabel>
                <Styled.StatValue>{pagination.currentpage} / {pagination.totalpages}</Styled.StatValue>
              </Styled.StatBadge>
            </Styled.PageStats>
          )}
        </Styled.HeaderActions>
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
      <TypedStyledTable
        columns={ORDER_COLUMNS}
          dataSource={orders.length === 0 && !loading ? [] : orders}
        rowKey="id"
        loading={loading}
          scroll={{ x: "max-content" }}
        onRow={(record: Order) => ({
          onClick: () => handleRowClick(record)
        })}
        locale={{
          emptyText: (
            <Styled.EmptyStateContainer>
              <Styled.EmptyStateIcon>
                <InboxOutlined />
              </Styled.EmptyStateIcon>
              <Styled.EmptyStateTitle>Нет данных</Styled.EmptyStateTitle>
              <Styled.EmptyStateText>
                Заявки не найдены. Попробуйте изменить параметры поиска или создайте новую заявку.
              </Styled.EmptyStateText>
            </Styled.EmptyStateContainer>
          )
        }}
        pagination={
          pagination
            ? {
                current: pagination.currentpage,
                pageSize: pagination.itemsperpage,
                total: pagination.totalitems,
                showSizeChanger: !isMobile,
                showQuickJumper: !isMobile,
                showTotal: !isMobile
                  ? (total: number, range: [number, number]) =>
                      `${range[0]}-${range[1]} из ${total} записей`
                  : undefined,
                pageSizeOptions: PAGE_SIZE_OPTIONS,
                onChange: (page: number, size: number) => handlePageChange(page, size),
                onShowSizeChange: (current: number, size: number) => handlePageChange(current, size)
              }
            : false
        }
      />
      </Styled.TableWrapper>
      <OrderDetailsModal order={selectedOrder} open={isModalOpen} onClose={handleCloseModal} />
    </Styled.OrdersContent>
  )
}
