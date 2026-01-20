import styled from "styled-components"
import { Modal, Descriptions, Tag } from "antd"

export const StyledModal = styled(Modal)(({ theme }) => ({
  "& .ant-modal-content": {
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: "12px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)"
  },
  "& .ant-modal-header": {
    backgroundColor: theme.colors.surface,
    borderBottom: `1px solid ${theme.colors.border}`,
    borderRadius: "12px 12px 0 0",
    padding: "20px 24px",
    "& .ant-modal-title": {
      color: theme.colors.text,
      fontSize: "20px",
      fontWeight: 600
    }
  },
  "& .ant-modal-body": {
    color: theme.colors.text,
    backgroundColor: theme.colors.surface,
    maxHeight: "calc(100vh - 200px)",
    overflowY: "auto",
    padding: "24px",
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
  marginBottom: "24px",
  padding: "20px",
  backgroundColor: theme.colors.background,
  borderRadius: "8px",
  border: `1px solid ${theme.colors.border}`,
  transition: "all 0.2s ease",
  "&:hover": {
    borderColor: theme.colors.borderHover,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)"
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
  fontSize: "16px",
  fontWeight: 600,
  margin: 0
}))

export const InfoGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "12px"
})

export const InfoItem = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  padding: "12px",
  backgroundColor: theme.colors.surface,
  borderRadius: "6px",
  border: `1px solid ${theme.colors.border}`,
  transition: "all 0.2s ease",
  "&:hover": {
    borderColor: theme.colors.primary,
    transform: "translateY(-1px)",
    boxShadow: "0 2px 6px rgba(22, 119, 255, 0.1)"
  }
}))

export const InfoLabel = styled.span(({ theme }) => ({
  color: theme.colors.textSecondary,
  fontSize: "11px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.5px"
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
  padding: "12px 16px 12px 36px",
  backgroundColor: theme.colors.surface,
  borderRadius: "6px",
  border: `1px solid ${theme.colors.border}`,
  color: theme.colors.text,
  fontSize: "14px",
  transition: "all 0.2s ease",
  "&:before": {
    content: '""',
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: theme.colors.primary
  },
  "&:hover": {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primaryLight
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

