import styled from "styled-components"

export const LoginContainer = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: theme.colors.background,
  padding: "20px",
  boxSizing: "border-box",
  "@media (max-width: 768px)": {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: "16px",
    height: "100dvh",
    minHeight: "100dvh",
    maxHeight: "100dvh",
    overflow: "hidden"
  }
}))

export const LoginCard = styled.div(({ theme }) => ({
  width: "100%",
  maxWidth: "400px",
  backgroundColor: theme.colors.surface,
  borderRadius: "8px",
  padding: "40px",
  boxShadow: theme.colors.background === "#0b1120" ? "0 4px 12px rgba(0, 0, 0, 0.3)" : "0 4px 12px rgba(0, 0, 0, 0.1)",
  boxSizing: "border-box",
  "@media (max-width: 768px)": {
    padding: "24px",
    maxHeight: "calc(100dvh - 32px)",
    overflowY: "auto",
    overflowX: "hidden"
  }
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

