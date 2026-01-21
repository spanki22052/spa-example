import type { ColumnsType } from "antd/es/table"
import { Modal } from "antd"
import React from "react"
import {
  UserOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
} from "@ant-design/icons"
import type { Order, Pagination } from "../../@types/orders"
import * as Styled from "./tableComponents"

const getStatusConfig = (status: string): { color: string; text: string } => {
  const statusMap: Record<string, { color: string; text: string }> = {
    new: { color: "blue", text: "Новая" },
    processing: { color: "orange", text: "В обработке" },
    completed: { color: "green", text: "Завершена" },
    cancelled: { color: "red", text: "Отменена" }
  }
  return statusMap[status] || { color: "default", text: status }
}

const showPhoneModal = (name: string, phoneNumber: string) => {
  Modal.info({
    icon: null,
    okButtonProps: {
      style: {
        backgroundColor: "#df3d4a",
        borderColor: "#df3d4a"
      }
    },
    title: "Контактные данные",
    content: (
      <div>
        <p>
          <strong>Контактное лицо:</strong> {name}
        </p>
        <p>
          <strong>Телефон:</strong> {phoneNumber}
        </p>
      </div>
    )
  })
}

export const getOrderColumns = (onRowClick: (order: Order) => void): ColumnsType<Order> => [
  {
    title: "Контактное лицо",
    key: "contactPerson",
    width: 220,
    render: (_: unknown, record: Order) => (
      <Styled.ClientContainer onClick={() => onRowClick(record)}>
        <Styled.IconWrapper color="#1677ff" fontSize="16px">
          <UserOutlined />
        </Styled.IconWrapper>
        <Styled.ClientInfo>
          <Styled.ClientName>{record.json.name}</Styled.ClientName>
        </Styled.ClientInfo>
      </Styled.ClientContainer>
    )
  },
  {
    title: "Телефон",
    key: "phoneNumber",
    width: 160,
    render: (_: unknown, record: Order) => (
      <Styled.ClientPhone onClick={() => showPhoneModal(record.json.name, record.json.phoneNumber)}>
        <PhoneOutlined /> {record.json.phoneNumber}
      </Styled.ClientPhone>
    )
  },
  {
    title: "Маршрут",
    key: "route",
    width: 200,
    render: (_: unknown, record: Order) => (
      <Styled.RouteContainer>
        <Styled.RoutePoint>
          <Styled.IconWrapper color="#52c41a" fontSize="14px">
            <EnvironmentOutlined />
          </Styled.IconWrapper>
          <Styled.RouteAddress>{record.json.fromAddress}</Styled.RouteAddress>
        </Styled.RoutePoint>
        <Styled.RoutePoint>
          <Styled.IconWrapper color="#ff4d4f" fontSize="14px">
            <EnvironmentOutlined />
          </Styled.IconWrapper>
          <Styled.RouteAddress>{record.json.toAddress}</Styled.RouteAddress>
        </Styled.RoutePoint>
      </Styled.RouteContainer>
    )
  },
  {
    title: "Статус",
    dataIndex: "status",
    key: "status",
    width: 150,
    render: (status: string) => {
      if (!status || status === "") {
        return <Styled.StatusTag>—</Styled.StatusTag>
      }
      const config = getStatusConfig(status)
      return <Styled.StatusTag color={config.color}>{config.text}</Styled.StatusTag>
    }
  },
  {
    title: "Транспорт",
    key: "transport",
    width: 160,
    render: (_: unknown, record: Order) => {
      const transportType = record.json.selectedTransport?.type
      const isPlane = transportType === "plane"
      const isCar = transportType === "car"

      return (
        <Styled.TransportContainer>
          <Styled.TransportTag>
            {transportType
              ? isPlane
                ? "Самолет"
                : isCar
                  ? "Авто"
                  : transportType
              : "Не указан"}
          </Styled.TransportTag>
        </Styled.TransportContainer>
      )
    }
  },
  {
    title: "Тип клиента",
    key: "clientType",
    width: 140,
    render: (_: unknown, record: Order) =>
      record.json.clientType === "natural" ? "Физическое лицо" : "Юридическое лицо"
  },
  {
    title: "Тариф",
    key: "selectedRate",
    width: 140,
    render: (_: unknown, record: Order) => record.json.selectedRate || "Не указан"
  },
  {
    title: "Груз",
    key: "cargo",
    width: 220,
    render: (_: unknown, record: Order) =>
      record.json.selectedCargo && record.json.selectedCargo.length > 0
        ? record.json.selectedCargo.map(cargo => cargo.name).join(", ")
        : "Не указан"
  },
  {
    title: "Габариты",
    key: "sizes",
    width: 220,
    render: (_: unknown, record: Order) => {
      const { length, width, height, weight, quantity } = record.json.sizes
      return `${length} × ${width} × ${height}, ${weight} кг, ${quantity} шт.`
    }
  },
  {
    title: "Email",
    key: "email",
    width: 200,
    render: (_: unknown, record: Order) => record.json.email
  }
]

export const PAGE_SIZE_OPTIONS: string[] = ["10", "20", "50", "100"]

export const getPaginationConfig = (
  pagination: Pagination | null,
  isMobile: boolean,
  onPageChange: (page: number, size: number) => void
) => {
  if (!pagination) return null

  const baseConfig = {
    current: pagination.currentpage,
    pageSize: pagination.itemsperpage,
    total: pagination.totalitems,
    showTotal: (total: number, range: [number, number]) =>
      `Таблица: ${range[0]}-${range[1]} из ${total}`,
    onChange: (page: number, size: number) => onPageChange(page, size),
    onShowSizeChange: (current: number, size: number) => onPageChange(current, size)
  }

  if (!isMobile) {
    return {
      ...baseConfig,
      showSizeChanger: true,
      showQuickJumper: true,
      pageSizeOptions: PAGE_SIZE_OPTIONS
    }
  }

  return {
    ...baseConfig,
    showSizeChanger: false,
    showQuickJumper: false
  }
}


