import React from "react"
import { Form, Input, Button } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import * as Styled from "./styled"
import { useLoginForm } from "./useLoginForm"
import type { LoginFormValues } from "./types"

export const LoginForm: React.FC = () => {
  const { loading, errors, handleSubmit } = useLoginForm()

  const onFinish = (values: LoginFormValues): void => {
    handleSubmit(values)
  }

  return (
    <Styled.LoginContainer>
      <Styled.LoginCard>
        <Styled.LoginTitle>Вход в систему</Styled.LoginTitle>
        {errors.general && <Styled.ErrorMessage>{errors.general}</Styled.ErrorMessage>}
        <Form
          name="login"
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            label="Логин"
            name="login"
            validateStatus={errors.login ? "error" : ""}
            help={errors.login}
            rules={[
              {
                required: true,
                message: "Введите логин"
              }
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Введите логин"
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            validateStatus={errors.password ? "error" : ""}
            help={errors.password}
            rules={[
              {
                required: true,
                message: "Введите пароль"
              },
              {
                min: 8,
                message: "Пароль должен содержать минимум 8 символов"
              }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Введите пароль"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              size="large"
            >
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Styled.LoginCard>
    </Styled.LoginContainer>
  )
}

