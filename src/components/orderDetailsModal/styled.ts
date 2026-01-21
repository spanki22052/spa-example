import styled from "styled-components"
import { Modal, Descriptions, Tag } from "antd"

export const StyledModal = styled(Modal)(({ theme }) => ({
  "& .ant-modal-content": {
    backgroundColor: theme.colors.surface,
    border: "none",
    borderRadius: "24px",
    boxShadow: "0 18px 48px rgba(15, 23, 42, 0.25)",
    padding: 0,
    overflow: "hidden"
  },
  "& .ant-modal-header": {
    backgroundColor: theme.colors.surface,
    border: "none",
    borderRadius: "24px 24px 0 0",
    padding: "24px 32px",
    "& .ant-modal-title": {
      color: theme.colors.text,
      fontSize: "22px",
      fontWeight: 600
    }
  },
  "& .ant-modal-body": {
    color: theme.colors.text,
    backgroundColor: theme.colors.surface,
    maxHeight: "calc(100vh - 200px)",
    overflowY: "auto",
    padding: "24px 32px 32px",
    "&::-webkit-scrollbar": {
      width: "8px"
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent"
    },
    "&::-webkit-scrollbar-thumb": {
      background: theme.colors.scrollbarThumb,
      borderRadius: "4px",
      transition: "background 0.2s ease",
      "&:hover": {
        background: theme.colors.scrollbarThumbHover
      }
    }
  },
  "& .ant-modal-close": {
    color: theme.colors.textSecondary,
    "&:hover": {
      color: theme.colors.text,
      backgroundColor: theme.colors.surfaceHover
    }
  }
}))

export const StyledDescriptions = styled(Descriptions)(({ theme }) => ({
  "& .ant-descriptions-item-label": {
    color: theme.colors.textSecondary,
    fontWeight: 500
  },
  "& .ant-descriptions-item-content": {
    color: theme.colors.text
  },
  "& .ant-descriptions-row": {
    borderBottom: `1px solid ${theme.colors.border}`
  }
}))

export const Section = styled.div(({ theme }) => ({
  marginBottom: "32px",
  paddingBottom: "8px",
  borderBottom: `1px solid ${theme.colors.border}`,
  "&:last-of-type": {
    borderBottom: "none",
    marginBottom: 0,
    paddingBottom: 0
  }
}))

export const SectionHeader = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "16px"
})

export const SectionIcon = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  borderRadius: "6px",
  backgroundColor: theme.colors.primaryLight,
  color: theme.colors.primary,
  fontSize: "16px"
}))

export const SectionTitle = styled.h3(({ theme }) => ({
  color: theme.colors.text,
  fontSize: "18px",
  fontWeight: 600,
  margin: 0
}))

export const InfoGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  columnGap: "32px",
  rowGap: "8px"
})

export const InfoItem = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  padding: "6px 0"
}))

export const InfoLabel = styled.span(({ theme }) => ({
  color: theme.colors.textSecondary,
  fontSize: "12px",
  fontWeight: 500
}))

export const InfoValue = styled.span(({ theme }) => ({
  color: theme.colors.text,
  fontSize: "14px",
  fontWeight: 500
}))

export const CargoList = styled.div({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px"
})

export const CargoItem = styled.div(({ theme }) => ({
  padding: "8px 16px",
  backgroundColor: theme.colors.surface,
  borderRadius: "20px",
  border: `1px solid ${theme.colors.primary}`,
  color: theme.colors.primary,
  fontSize: "13px",
  fontWeight: 500,
  transition: "all 0.2s ease",
  cursor: "default",
  "&:hover": {
    backgroundColor: theme.colors.primaryLight,
    transform: "scale(1.05)"
  }
}))

export const AddressList = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "10px"
})

export const AddressItem = styled.div(({ theme }) => ({
  position: "relative",
  padding: "0 0 0 20px",
  color: theme.colors.text,
  fontSize: "14px",
  transition: "color 0.2s ease",
  "&:before": {
    content: '""',
    position: "absolute",
    left: "4px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: theme.colors.primary
  },
  "&:hover": {
    color: theme.colors.primary
  }
}))

export const StatusTag = styled(Tag)<{ $status: string }>(({ theme, $status }) => {
  const getStatusColor = (): { bg: string; color: string; border: string } => {
    switch ($status.toLowerCase()) {
      case "completed":
      case "завершен":
        return {
          bg: "rgba(82, 196, 26, 0.1)",
          color: "#52c41a",
          border: "rgba(82, 196, 26, 0.3)"
        }
      case "pending":
      case "в ожидании":
        return {
          bg: "rgba(250, 173, 20, 0.1)",
          color: "#faad14",
          border: "rgba(250, 173, 20, 0.3)"
        }
      case "processing":
      case "в обработке":
        return {
          bg: theme.colors.primaryLight,
          color: theme.colors.primary,
          border: theme.colors.primary
        }
      default:
        return {
          bg: theme.colors.surfaceHover,
          color: theme.colors.textSecondary,
          border: theme.colors.border
        }
    }
  }

  const colors = getStatusColor()

  return {
    margin: 0,
    padding: "4px 12px",
    fontSize: "13px",
    fontWeight: 500,
    borderRadius: "12px",
    backgroundColor: colors.bg,
    color: colors.color,
    border: `1px solid ${colors.border}`
  }
})

export const Divider = styled.div(({ theme }) => ({
  height: "1px",
  backgroundColor: theme.colors.border,
  margin: "16px 0"
}))

export const ClientHeader = styled.div({
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
  marginBottom: "12px"
})

export const ClientMainInfo = styled.div({
  display: "flex",
  flexDirection: 'column',
  minWidth: 0
})

export const ClientName = styled.div(({ theme }) => ({
  color: theme.colors.text,
  fontSize: "14px",
  fontWeight: 600
}))

export const ClientMeta = styled.div(({ theme }) => ({
  color: theme.colors.textSecondary,
  fontSize: "13px"
}))

export const PhoneRow = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "8px"
})

export const ClientActions = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "8px"
})

export const CircleIconButton = styled.button(({ theme }) => ({
  width: "32px",
  height: "32px",
  borderRadius: "999px",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.colors.primary,
  color: "#fff",
  cursor: "pointer",
  transition: "background-color 0.2s ease, transform 0.1s ease",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: theme.colors.primaryHover,
    transform: "translateY(-1px)"
  },
  "&:active": {
    transform: "translateY(0)"
  }
}))

export const OrderDateValue = styled.div<{ $isUrgent: boolean }>(({ theme, $isUrgent }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: $isUrgent ? theme.colors.danger : theme.colors.text,
  fontWeight: $isUrgent ? 600 : 500,
  fontSize: "14px"
}))

export const UrgentBadge = styled.span(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  padding: "2px 8px",
  borderRadius: "4px",
  backgroundColor: "rgba(249, 115, 115, 0.15)",
  color: theme.colors.danger,
  fontSize: "11px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.5px"
}))

