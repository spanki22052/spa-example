import type { ColumnsType } from "antd/es/table"
import type { Order } from "../../@types/orders"
import { UserOutlined, EnvironmentOutlined, PhoneOutlined, ClockCircleOutlined, CarOutlined } from "@ant-design/icons"
import React from "react"
import {
  ClientContainer,
  ClientInfo,
  ClientName,
  ClientPhone,
  RouteContainer,
  RoutePoint,
  RouteAddress,
  RouteDivider,
  StatusTag,
  DateContainer,
  DateInfo,
  DateValue,
  TimeValue,
  IconWrapper,
  TransportContainer,
  TransportTag
} from "./tableComponents"

const getStatusConfig = (status: string): { color: string; text: string } => {
  const statusMap: Record<string, { color: string; text: string }> = {
    new: { color: "blue", text: "Новая" },
    processing: { color: "orange", text: "В обработке" },
    completed: { color: "green", text: "Завершена" },
    cancelled: { color: "red", text: "Отменена" }
  }
  return statusMap[status] || { color: "default", text: status }
}

export const ORDER_COLUMNS: ColumnsType<Order> = [
  {
    title: "Клиент",
    key: "name",
    width: 220,
    render: (_: unknown, record: Order) => (
      <ClientContainer>
        <IconWrapper color="#1677ff" fontSize="16px">
          <UserOutlined />
        </IconWrapper>
        <ClientInfo>
          <ClientName>{record.json.name}</ClientName>
          <ClientPhone>
            <PhoneOutlined /> {record.json.phoneNumber}
          </ClientPhone>
        </ClientInfo>
      </ClientContainer>
    )
  },
  {
    title: "Маршрут",
    key: "route",
    width: 200,
    render: (_: unknown, record: Order) => (
      <RouteContainer>
        <RoutePoint>
          <IconWrapper color="#52c41a" fontSize="14px">
            <EnvironmentOutlined />
          </IconWrapper>
          <RouteAddress>{record.json.fromAddress}</RouteAddress>
        </RoutePoint>
        <RoutePoint>
          <IconWrapper color="#ff4d4f" fontSize="14px">
            <EnvironmentOutlined />
          </IconWrapper>
          <RouteAddress>{record.json.toAddress}</RouteAddress>
        </RoutePoint>
      </RouteContainer>
    )
  },
  {
    title: "Транспорт",
    key: "transport",
    width: 150,
    render: (_: unknown, record: Order) => (
      <TransportContainer>
        <IconWrapper color="#722ed1" fontSize="14px">
          <CarOutlined />
        </IconWrapper>
        <TransportTag>
          {record.json.selectedTransport.type || "Не указан"}
        </TransportTag>
      </TransportContainer>
    )
  },
  {
    title: "Статус",
    dataIndex: "status",
    key: "status",
    width: 150,
    render: (status: string) => {
      const config = getStatusConfig(status)
      return (
        <StatusTag color={config.color}>
          {config.text}
        </StatusTag>
      )
    }
  },
  {
    title: "Дата создания",
    dataIndex: "createdat",
    key: "createdat",
    width: 180,
    render: (date: string) => {
      const dateObj = new Date(date)
      const formattedDate = dateObj.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      })
      const formattedTime = dateObj.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit"
      })
      return (
        <DateContainer>
          <IconWrapper color="#1677ff" fontSize="14px">
            <ClockCircleOutlined />
          </IconWrapper>
          <DateInfo>
            <DateValue>{formattedDate}</DateValue>
            <TimeValue>{formattedTime}</TimeValue>
          </DateInfo>
        </DateContainer>
      )
    }
  }
]

export const PAGE_SIZE_OPTIONS: string[] = ["10", "20", "50", "100"]

