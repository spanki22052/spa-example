import type { Rule } from "antd/es/form"

export const PASSWORD_VALIDATION_RULES: Rule[] = [
  {
    required: true,
    message: "Введите пароль"
  },
  {
    min: 8,
    message: "Пароль должен содержать минимум 8 символов"
  }
]

