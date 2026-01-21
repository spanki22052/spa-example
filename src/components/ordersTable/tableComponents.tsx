import styled from "styled-components"
import { Tag } from "antd"

export const IdCell = styled.span({
  fontWeight: 600,
  color: "#1677ff"
})

export const ClientContainer = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  cursor: "pointer"
})

export const ClientInfo = styled.div({
  display: "flex",
  flexDirection: "column"
})

export const ClientName = styled.span({
  fontWeight: 500,
  color: "#1677ff",
  textDecoration: "underline"
})

export const ClientPhone = styled.span({
  fontSize: "14px",
  fontWeight: 500,
  color: "#1677ff",
  textDecoration: "underline",
  cursor: "pointer"
})

export const RouteContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "2px"
})

export const RoutePoint = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "6px"
})

export const RouteAddress = styled.span({
  fontSize: "13px"
})

export const RouteDivider = styled.div({
  borderLeft: "2px dashed rgba(255,255,255,0.2)",
  height: "8px",
  marginLeft: "6px"
})

export const StatusTag = styled(Tag)({
  borderRadius: "6px",
  padding: "4px 12px",
  fontWeight: 500,
  fontSize: "13px"
})

export const DateContainer = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "6px"
})

export const DateInfo = styled.div({
  display: "flex",
  flexDirection: "column"
})

export const DateValue = styled.span({
  fontWeight: 500,
  fontSize: "13px"
})

export const TimeValue = styled.span({
  fontSize: "12px",
  opacity: 0.7
})

export const IconWrapper = styled.span<{ color?: string; fontSize?: string }>(({ color, fontSize }) => ({
  color: color || "#1677ff",
  fontSize: fontSize || "16px"
}))

export const TransportContainer = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "8px"
})

export const TransportTag = styled(Tag)({
  borderRadius: "6px",
  padding: "4px 12px",
  fontWeight: 500,
  fontSize: "13px",
  background: "rgba(22, 119, 255, 0.1)",
  color: "#1677ff",
  border: "1px solid rgba(22, 119, 255, 0.3)"
})


