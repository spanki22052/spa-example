import styled from "styled-components"

export const NotFoundContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: theme.colors.background,
  padding: "20px"
}))

export const NotFoundContent = styled.div(({ theme }) => ({
  textAlign: "center",
  maxWidth: "600px",
  width: "100%"
}))

export const NotFoundCode = styled.h1(({ theme }) => ({
  color: theme.colors.primary,
  fontSize: "120px",
  fontWeight: 700,
  margin: 0,
  lineHeight: "1",
  letterSpacing: "-0.05em",
  background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryHover} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text"
}))

export const NotFoundTitle = styled.h2(({ theme }) => ({
  color: theme.colors.text,
  fontSize: "32px",
  fontWeight: 600,
  marginTop: "24px",
  marginBottom: "16px",
  lineHeight: "1.2"
}))

export const NotFoundDescription = styled.p(({ theme }) => ({
  color: theme.colors.textSecondary,
  fontSize: "16px",
  marginBottom: "32px",
  lineHeight: "1.6"
}))

export const NotFoundActions = styled.div({
  display: "flex",
  gap: "16px",
  justifyContent: "center",
  flexWrap: "wrap"
})

