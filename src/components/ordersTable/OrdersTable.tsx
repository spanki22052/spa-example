import React from "react"
import type { TableProps } from "antd/es/table"
import { InboxOutlined } from "@ant-design/icons"
import type { Order } from "../../@types/orders"
import { getOrderColumns, getPaginationConfig } from "./constants"
import type { OrdersTableProps } from "./types"
import * as Styled from "./styled"

const TypedStyledTable = Styled.StyledTable as React.ComponentType<TableProps<Order>>

export const OrdersTable: React.FC<OrdersTableProps> = ({
  orders,
  loading,
  pagination,
  isMobile,
  onPageChange,
  onRowClick
}) => {
  const paginationConfig = getPaginationConfig(pagination, isMobile, onPageChange)

  return (
    <Styled.TableWrapper>
      {paginationConfig && (
        <Styled.StyledPagination
          {...paginationConfig}
        />
      )}
      <TypedStyledTable
        columns={getOrderColumns(onRowClick)}
        dataSource={orders.length === 0 && !loading ? [] : orders}
        rowKey="id"
        loading={loading}
        scroll={{ x: "max-content" }}
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
        pagination={false}
      />
    </Styled.TableWrapper>
  )
}


