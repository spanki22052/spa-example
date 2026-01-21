import React from "react"
import {
  ClockCircleOutlined,
  PhoneOutlined,
  WhatsAppOutlined
} from "@ant-design/icons"
import * as Styled from "./styled"
import { useOrderDetailsModal } from "./useOrderDetailsModal"
import type { OrderDetailsModalProps } from "./types"

export const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({ order, open, onClose }) => {
  if (!order) {
    return null
  }

  const { json, status } = order

  const { orderDateInfo, handleCallClick, handleWhatsappClick } = useOrderDetailsModal(json.orderDate, json.phoneNumber)

  return (
    <Styled.StyledModal
      title={json.name}
      open={open}
      onCancel={onClose}
      footer={null}
      width={900}
      destroyOnClose
    >
      <Styled.Section>
        <Styled.SectionHeader>
          <Styled.SectionTitle>Клиент</Styled.SectionTitle>
        </Styled.SectionHeader>

        <Styled.ClientHeader>
          <Styled.ClientMainInfo>
            <Styled.ClientName>{json.name}</Styled.ClientName>
            <Styled.ClientMeta>
              {json.clientType === "natural" ? "Физическое лицо" : "Юридическое лицо"}
            </Styled.ClientMeta>
          </Styled.ClientMainInfo>
        </Styled.ClientHeader>

        <Styled.InfoGrid>
          <Styled.InfoItem>
            <Styled.InfoLabel>Телефон</Styled.InfoLabel>
            <Styled.PhoneRow>
              <Styled.InfoValue>{json.phoneNumber || "Не указан"}</Styled.InfoValue>
              {json.phoneNumber && (
                <Styled.ClientActions>
                  <Styled.CircleIconButton type="button" onClick={handleCallClick}>
                    <PhoneOutlined />
                  </Styled.CircleIconButton>
                  <Styled.CircleIconButton type="button" onClick={handleWhatsappClick}>
                    <WhatsAppOutlined />
                  </Styled.CircleIconButton>
                </Styled.ClientActions>
              )}
            </Styled.PhoneRow>
          </Styled.InfoItem>
          <Styled.InfoItem>
            <Styled.InfoLabel>Email</Styled.InfoLabel>
            <Styled.InfoValue>{json.email || "Не указан"}</Styled.InfoValue>
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
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionHeader>
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

      <Styled.Section>
        <Styled.SectionHeader>
          <Styled.SectionTitle>Тип груза</Styled.SectionTitle>
        </Styled.SectionHeader>
        {json.selectedCargo && json.selectedCargo.length > 0 ? (
          <Styled.CargoList>
            {json.selectedCargo.map((cargo) => (
              <Styled.CargoItem key={cargo.id}>{cargo.name}</Styled.CargoItem>
            ))}
          </Styled.CargoList>
        ) : (
          <Styled.InfoValue>Тип груза не указан</Styled.InfoValue>
        )}
      </Styled.Section>
    </Styled.StyledModal>
  )
}

