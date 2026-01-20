import React from "react"
import { RightOutlined } from "@ant-design/icons"
import * as Styled from "./styled"
import { useCRMPage } from "./useCRMPage"
import type { CRMPageProps } from "./types"
import { SERVICES } from "./constants"

export const CRMPage: React.FC<CRMPageProps> = () => {
  const { handleServiceClick } = useCRMPage()

  return (
    <Styled.CRMPageContainer>
      <div>
        <Styled.PageTitle>Добро пожаловать в CRM</Styled.PageTitle>
        <Styled.PageDescription>Выберите раздел для начала работы с системой</Styled.PageDescription>
      </div>
      <Styled.ServicesGrid>
        {SERVICES.map((service) => (
          <Styled.ServiceCard
            key={service.id}
            onClick={() => handleServiceClick(service.path)}
            $isClickable={true}
          >
            <Styled.ServiceIcon $color={service.iconColor}>{service.icon}</Styled.ServiceIcon>
            <Styled.ServiceContent>
              <Styled.ServiceTitle>{service.title}</Styled.ServiceTitle>
              <Styled.ServiceDescription>{service.description}</Styled.ServiceDescription>
            </Styled.ServiceContent>
            <Styled.ServiceFooter>
              {service.badge && (
                <Styled.ServiceBadge $variant={service.badge.variant}>{service.badge.text}</Styled.ServiceBadge>
              )}
              <Styled.ArrowIcon>
                <RightOutlined />
              </Styled.ArrowIcon>
            </Styled.ServiceFooter>
          </Styled.ServiceCard>
        ))}
      </Styled.ServicesGrid>
    </Styled.CRMPageContainer>
  )
}

