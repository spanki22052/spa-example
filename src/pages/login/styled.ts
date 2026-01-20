import styled from "styled-components"

export const LoginContainer = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: theme.colors.background,
  padding: "20px"
}))

export const LoginCard = styled.div(({ theme }) => ({
  width: "100%",
  maxWidth: "400px",
  backgroundColor: theme.colors.surface,
  borderRadius: "8px",
  padding: "40px",
  boxShadow: theme.colors.background === "#0b1120" ? "0 4px 12px rgba(0, 0, 0, 0.3)" : "0 4px 12px rgba(0, 0, 0, 0.1)"
}))

export const LoginTitle = styled.h1(({ theme }) => ({
  color: theme.colors.text,
  fontSize: "24px",
  fontWeight: 600,
  marginBottom: "32px",
  textAlign: "center"
}))

export const ErrorMessage = styled.div(({ theme }) => ({
  color: theme.colors.danger,
  fontSize: "14px",
  marginBottom: "16px",
  textAlign: "center"
}))

