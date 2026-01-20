import React from "react"
import {
  UserOutlined,
  EnvironmentOutlined,
  InboxOutlined,
  CarOutlined,
  ClockCircleOutlined,
  FileTextOutlined
} from "@ant-design/icons"
import * as Styled from "./styled"
import { useOrderDetailsModal } from "./useOrderDetailsModal"
import type { OrderDetailsModalProps } from "./types"

export const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({ order, open, onClose }) => {
  const { formatDate, formatOrderDate } = useOrderDetailsModal()

  if (!order) {
    return null
  }

  const { json, status, createdat, id } = order
  console.log(order)

  const orderDateInfo = formatOrderDate(json.orderDate)

  return (
    <Styled.StyledModal
      title={`Детали заказа #${id}`}
      open={open}
      onCancel={onClose}
      footer={null}
      width={900}
      destroyOnClose
    >
      <Styled.Section>
        <Styled.SectionHeader>
          <Styled.SectionIcon>
            <FileTextOutlined />
          </Styled.SectionIcon>
          <Styled.SectionTitle>Основная информация</Styled.SectionTitle>
        </Styled.SectionHeader>
        <Styled.InfoGrid>
          <Styled.InfoItem>
            <Styled.InfoLabel>ID заказа</Styled.InfoLabel>
            <Styled.InfoValue>#{id}</Styled.InfoValue>
          </Styled.InfoItem>
          <Styled.InfoItem>
            <Styled.InfoLabel>Статус</Styled.InfoLabel>
            <Styled.InfoValue>
              <Styled.StatusTag $status={status}>{status}</Styled.StatusTag>
            </Styled.InfoValue>
          </Styled.InfoItem>
          <Styled.InfoItem>
            <Styled.InfoLabel>Дата создания</Styled.InfoLabel>
            <Styled.InfoValue>{formatDate(createdat)}</Styled.InfoValue>
          </Styled.InfoItem>
        </Styled.InfoGrid>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionHeader>
          <Styled.SectionIcon>
            <UserOutlined />
          </Styled.SectionIcon>
          <Styled.SectionTitle>Информация о клиенте</Styled.SectionTitle>
        </Styled.SectionHeader>
        <Styled.InfoGrid>
          <Styled.InfoItem>
            <Styled.InfoLabel>Имя</Styled.InfoLabel>
            <Styled.InfoValue>{json.name}</Styled.InfoValue>
          </Styled.InfoItem>
          <Styled.InfoItem>
            <Styled.InfoLabel>Тип клиента</Styled.InfoLabel>
            <Styled.InfoValue>{json.clientType === "natural" ? "Физическое лицо" : "Юридическое лицо"}</Styled.InfoValue>
          </Styled.InfoItem>
          <Styled.InfoItem>
            <Styled.InfoLabel>Телефон</Styled.InfoLabel>
            <Styled.InfoValue>{json.phoneNumber}</Styled.InfoValue>
          </Styled.InfoItem>
          <Styled.InfoItem>
            <Styled.InfoLabel>Email</Styled.InfoLabel>
            <Styled.InfoValue>{json.email}</Styled.InfoValue>
          </Styled.InfoItem>
          {json.inn && (
            <Styled.InfoItem>
              <Styled.InfoLabel>ИНН</Styled.InfoLabel>
              <Styled.InfoValue>{json.inn}</Styled.InfoValue>
            </Styled.InfoItem>
          )}
        </Styled.InfoGrid>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionHeader>
          <Styled.SectionIcon>
            <EnvironmentOutlined />
          </Styled.SectionIcon>
          <Styled.SectionTitle>Маршрут</Styled.SectionTitle>
        </Styled.SectionHeader>
        <Styled.InfoGrid>
          <Styled.InfoItem>
            <Styled.InfoLabel>Откуда</Styled.InfoLabel>
            <Styled.InfoValue>{json.fromAddress}</Styled.InfoValue>
          </Styled.InfoItem>
          <Styled.InfoItem>
            <Styled.InfoLabel>Куда</Styled.InfoLabel>
            <Styled.InfoValue>{json.toAddress}</Styled.InfoValue>
          </Styled.InfoItem>
        </Styled.InfoGrid>
        {json.intermediatePoints && json.intermediatePoints.length > 0 && (
          <>
            <Styled.Divider />
            <Styled.InfoLabel style={{ marginBottom: "12px", display: "block" }}>Промежуточные точки</Styled.InfoLabel>
            <Styled.AddressList>
              {json.intermediatePoints.map((point: string, index: number) => (
                <Styled.AddressItem key={index}>{point}</Styled.AddressItem>
              ))}
            </Styled.AddressList>
          </>
        )}
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionHeader>
          <Styled.SectionIcon>
            <InboxOutlined />
          </Styled.SectionIcon>
          <Styled.SectionTitle>Параметры груза</Styled.SectionTitle>
        </Styled.SectionHeader>
        <Styled.InfoGrid>
          <Styled.InfoItem>
            <Styled.InfoLabel>Длина</Styled.InfoLabel>
            <Styled.InfoValue>{json.sizes.length} м</Styled.InfoValue>
          </Styled.InfoItem>
          <Styled.InfoItem>
            <Styled.InfoLabel>Ширина</Styled.InfoLabel>
            <Styled.InfoValue>{json.sizes.width} м</Styled.InfoValue>
          </Styled.InfoItem>
          <Styled.InfoItem>
            <Styled.InfoLabel>Высота</Styled.InfoLabel>
            <Styled.InfoValue>{json.sizes.height} м</Styled.InfoValue>
          </Styled.InfoItem>
          <Styled.InfoItem>
            <Styled.InfoLabel>Вес</Styled.InfoLabel>
            <Styled.InfoValue>{json.sizes.weight} кг</Styled.InfoValue>
          </Styled.InfoItem>
          <Styled.InfoItem>
            <Styled.InfoLabel>Количество</Styled.InfoLabel>
            <Styled.InfoValue>{json.sizes.quantity} шт</Styled.InfoValue>
          </Styled.InfoItem>
        </Styled.InfoGrid>
        {json.selectedCargo && json.selectedCargo.length > 0 && (
          <>
            <Styled.Divider />
            <Styled.InfoLabel style={{ marginBottom: "12px", display: "block" }}>Тип груза</Styled.InfoLabel>
            <Styled.CargoList>
              {json.selectedCargo.map((cargo) => (
                <Styled.CargoItem key={cargo.id}>{cargo.name}</Styled.CargoItem>
              ))}
            </Styled.CargoList>
          </>
        )}
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionHeader>
          <Styled.SectionIcon>
            <CarOutlined />
          </Styled.SectionIcon>
          <Styled.SectionTitle>Транспорт и сроки</Styled.SectionTitle>
        </Styled.SectionHeader>
        <Styled.InfoGrid>
          <Styled.InfoItem>
            <Styled.InfoLabel>Тип транспорта</Styled.InfoLabel>
            <Styled.InfoValue>{json.selectedTransport.type}</Styled.InfoValue>
          </Styled.InfoItem>
          <Styled.InfoItem>
            <Styled.InfoLabel>Тариф</Styled.InfoLabel>
            <Styled.InfoValue>{json.selectedRate}</Styled.InfoValue>
          </Styled.InfoItem>
          <Styled.InfoItem>
            <Styled.InfoLabel>
              <ClockCircleOutlined style={{ marginRight: "4px" }} />
              Дата заказа
            </Styled.InfoLabel>
            <Styled.InfoValue>{orderDateInfo.text}</Styled.InfoValue>
          </Styled.InfoItem>
        </Styled.InfoGrid>
      </Styled.Section>
    </Styled.StyledModal>
  )
}

