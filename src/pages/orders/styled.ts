import styled from "styled-components"
import { Spin, Alert, Button } from "antd"

export const OrdersContent = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  boxSizing: "border-box",
  "@media (max-width: 768px)": {
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden"
  }
})

export const PageHeader = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "24px",
  "@media (max-width: 768px)": {
    marginBottom: "16px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "12px"
  }
})

export const PageTitleWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "12px"
})

export const PageTitle = styled.h1(({ theme }) => ({
  margin: 0,
  fontSize: "28px",
  fontWeight: 700,
  color: theme.colors.text,
  display: "flex",
  alignItems: "center",
  gap: "12px",
  "@media (max-width: 768px)": {
    fontSize: "22px"
  }
}))

export const TitleIcon = styled.div(({ theme }) => ({
  width: "48px",
  height: "48px",
  borderRadius: "12px",
  backgroundColor: theme.colors.primaryLight,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  color: theme.colors.primary,
  "@media (max-width: 768px)": {
    width: "40px",
    height: "40px",
    fontSize: "20px"
  }
}))

export const TableWrapper = styled.div({
  flex: 1
})

export const LoadingContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "400px"
})

export const StyledSpin = styled(Spin)(({ theme }) => ({
  color: theme.colors.primary
}))

export const ErrorContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "400px",
  gap: "16px"
})

export const StyledAlert = styled(Alert)({
  width: "100%",
  maxWidth: "600px",
  marginBottom: "16px",
  "@media (max-width: 768px)": {
    fontSize: "12px"
  }
})

export const ErrorAlert = styled(Alert)({
  width: "100%",
  marginBottom: "16px"
})

export const RetryButton = styled(Button)({
  marginTop: "8px"
})

export const FilterButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  borderRadius: "8px",
  fontWeight: 500,
  height: "40px",
  padding: "0 16px"
})

export const EmptyStateContainer = styled.div({
  display: "flex"
})

export const EmptyStateIcon = styled.div({
  fontSize: "64px"
})

export const EmptyStateTitle = styled.h3({
  margin: 0,
  fontSize: "18px"
})

export const EmptyStateText = styled.p({
  margin: 0,
  fontSize: "14px"
})

