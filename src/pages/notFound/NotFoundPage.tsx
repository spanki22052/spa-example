import React from "react"
import { Button } from "antd"
import {  ArrowLeftOutlined } from "@ant-design/icons"
import * as Styled from "./styled"
import { useNotFoundPage } from "./useNotFoundPage"
import type { NotFoundPageProps } from "./types"

export const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  const { handleGoHome, handleGoBack } = useNotFoundPage()

  return (
    <Styled.NotFoundContainer>
      <Styled.NotFoundContent>
        <Styled.NotFoundCode>404</Styled.NotFoundCode>
        <Styled.NotFoundTitle>Страница не найдена</Styled.NotFoundTitle>
        <Styled.NotFoundDescription>
          К сожалению, запрашиваемая страница не существует или была перемещена.
          Проверьте правильность адреса или вернитесь на главную страницу.
        </Styled.NotFoundDescription>
        <Styled.NotFoundActions>
          <Button
            icon={<ArrowLeftOutlined />}
            size="large"
            onClick={handleGoBack}
          >
            Назад
          </Button>
        </Styled.NotFoundActions>
      </Styled.NotFoundContent>
    </Styled.NotFoundContainer>
  )
}

