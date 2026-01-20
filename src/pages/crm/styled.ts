import styled from "styled-components"

export const CRMPageContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  gap: "32px",
  "@media (max-width: 768px)": {
    gap: "24px"
  }
})

export const PageTitle = styled.h1(({ theme }) => ({
  color: theme.colors.text,
  marginBottom: "12px",
  marginTop: 0,
  fontSize: "32px",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  lineHeight: "1.2",
  "@media (max-width: 768px)": {
    fontSize: "24px"
  }
}))

export const PageDescription = styled.p(({ theme }) => ({
  color: theme.colors.textSecondary,
  margin: 0,
  fontSize: "16px",
  lineHeight: "1.6",
  "@media (max-width: 768px)": {
    fontSize: "14px"
  }
}))

export const ServicesGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "24px",
  width: "100%",
  "@media (max-width: 768px)": {
    gridTemplateColumns: "1fr",
    gap: "16px"
  }
})

export const ServiceCard = styled.div<{ $isClickable?: boolean }>(({ theme, $isClickable = true }) => ({
  backgroundColor: theme.colors.surface,
  borderRadius: "16px",
  padding: "32px",
  border: `1px solid ${theme.colors.border}`,
  cursor: $isClickable ? "pointer" : "default",
  transition: "all 0.3s ease",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    backgroundColor: theme.colors.primary,
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.3s ease"
  },
  ...($isClickable && {
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: `0 8px 24px ${theme.colors.primaryLight}`,
      borderColor: theme.colors.primary,
      backgroundColor: theme.colors.surfaceHover,
      "&::before": {
        transform: "scaleX(1)"
      },
      "& $ServiceIcon": {
        transform: "scale(1.1) rotate(5deg)",
        backgroundColor: theme.colors.primaryLightHover
      },
      "& $ServiceTitle": {
        color: theme.colors.primary
      }
    }
  }),
  "@media (max-width: 768px)": {
    padding: "24px"
  }
}))

export const ServiceIcon = styled.div<{ $color?: string }>(({ theme, $color }) => ({
  width: "64px",
  height: "64px",
  borderRadius: "16px",
  backgroundColor: $color || theme.colors.primaryLight,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "32px",
  color: $color || theme.colors.primary,
  transition: "all 0.3s ease",
  "@media (max-width: 768px)": {
    width: "56px",
    height: "56px",
    fontSize: "28px"
  }
}))

export const ServiceContent = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  flex: 1
})

export const ServiceTitle = styled.h3(({ theme }) => ({
  margin: 0,
  fontSize: "20px",
  fontWeight: 600,
  color: theme.colors.text,
  transition: "color 0.3s ease",
  "@media (max-width: 768px)": {
    fontSize: "18px"
  }
}))

export const ServiceDescription = styled.p(({ theme }) => ({
  margin: 0,
  fontSize: "14px",
  lineHeight: "1.6",
  color: theme.colors.textSecondary,
  "@media (max-width: 768px)": {
    fontSize: "13px"
  }
}))

export const ServiceFooter = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "8px"
})

export const ServiceBadge = styled.span<{ $variant?: "primary" | "success" | "warning" }>(
  ({ theme, $variant = "primary" }) => {
    const colors = {
      primary: {
        background: theme.colors.primaryLight,
        color: theme.colors.primary,
        border: theme.colors.primary
      },
      success: {
        background: "rgba(34, 197, 94, 0.15)",
        color: "#22c55e",
        border: "#22c55e"
      },
      warning: {
        background: "rgba(251, 191, 36, 0.15)",
        color: "#fbbf24",
        border: "#fbbf24"
      }
    }

    const colorScheme = colors[$variant]

    return {
      padding: "4px 12px",
      borderRadius: "12px",
      fontSize: "12px",
      fontWeight: 500,
      backgroundColor: colorScheme.background,
      color: colorScheme.color,
      border: `1px solid ${colorScheme.border}`,
      textTransform: "uppercase",
      letterSpacing: "0.5px"
    }
  }
)

export const ArrowIcon = styled.span(({ theme }) => ({
  fontSize: "16px",
  color: theme.colors.primary,
  transition: "transform 0.3s ease",
  [`${ServiceCard}:hover &`]: {
    transform: "translateX(4px)"
  }
}))

