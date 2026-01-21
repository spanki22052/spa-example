import styled from "styled-components"
import { Table, Pagination as AntPagination } from "antd"

export const TableWrapper = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  minHeight: 0
})

export const StyledTable = styled(Table)(({ theme }) => ({
  backgroundColor: theme.colors.surface,
  borderRadius: "24px",
  overflow: "hidden",
  border: `1px solid ${theme.colors.border}`,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  "& .ant-table-container": {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    borderRadius: "16px 16px 0 0"
  },
  "& .ant-table-body": {
    flex: 1,
    overflowY: "auto",
    overflowX: "hidden"
  },
  "& .ant-table": {
    backgroundColor: theme.colors.surface,
    color: theme.colors.text,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: 0
  },
  "& .ant-table-thead > tr > th": {
    color: theme.colors.text,
    borderBottom: `2px solid ${theme.colors.border}`,
    fontWeight: 600,
    padding: "16px 16px",
    fontSize: "14px",
    letterSpacing: "0.5px",
    "&::before": {
      display: "none"
    },
    "@media (max-width: 768px)": {
      padding: "12px 8px",
      fontSize: "12px"
    }
  },
  "& .ant-table-tbody > tr": {
    backgroundColor: theme.colors.surface,
    color: theme.colors.text,
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.colors.surfaceHover,
      transform: "translateY(-1px)",
      boxShadow: `0 2px 8px ${theme.colors.primaryLight}`
    },
    "&:last-child > td": {
      borderBottom: "none"
    }
  },
  "& .ant-table-tbody > tr > td": {
    borderBottom: `1px solid ${theme.colors.border}`,
    color: theme.colors.text,
    padding: "16px 16px",
    fontSize: "14px",
    "@media (max-width: 768px)": {
      padding: "12px 8px",
      fontSize: "12px"
    }
  },
  "& .ant-table-cell-fix-left, & .ant-table-cell-fix-right": {
    backgroundColor: "inherit"
  },
  "& .ant-table-pagination": {
    margin: "0",
    padding: "16px",
    display: "flex",
    justifyContent: "flex-end",
    borderTop: `1px solid ${theme.colors.border}`,
    marginTop: "auto",
    "@media (max-width: 768px)": {
      padding: "12px 8px",
      justifyContent: "center"
    }
  },
  "& .ant-pagination": {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    justifyContent: "flex-end",
    margin: "0",
    "@media (max-width: 768px)": {
      justifyContent: "center"
    }
  },
  "& .ant-pagination-item": {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.border,
    minWidth: "36px",
    height: "36px",
    lineHeight: "34px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    "@media (max-width: 768px)": {
      minWidth: "32px",
      height: "32px",
      lineHeight: "30px"
    },
    "& a": {
      fontSize: "14px",
      fontWeight: 500,
      "@media (max-width: 768px)": {
        fontSize: "12px"
      }
    },
    "&:hover": {
      borderColor: theme.colors.primary,
      backgroundColor: theme.colors.primaryLight,
      transform: "translateY(-2px)",
      boxShadow: `0 4px 8px ${theme.colors.primaryLight}`,
    }
  },
  "& .ant-pagination-item-active": {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
    boxShadow: `0 4px 12px ${theme.colors.primaryLight}`,
    "& a": {
      color: theme.colors.white,
      fontWeight: 600
    },
    "&:hover": {
      backgroundColor: theme.colors.primaryHover,
      borderColor: theme.colors.primaryHover,
      // Сохраняем белый цвет текста при наведении,
      // чтобы он не "сливался" с цветом фона из дефолтных стилей Ant Design
      "& a": {
        color: theme.colors.white
      }
    }
  },
  "& .ant-pagination-prev, & .ant-pagination-next": {
    minWidth: "36px",
    height: "36px",
    borderRadius: "8px",
    "@media (max-width: 768px)": {
      minWidth: "32px",
      height: "32px"
    },
    "& .ant-pagination-item-link": {
      color: theme.colors.text,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.surface,
      borderRadius: "8px",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.primaryLight,
        transform: "translateY(-2px)",
        boxShadow: `0 4px 8px ${theme.colors.primaryLight}`
      }
    }
  },
  "& .ant-pagination-disabled": {
    "& .ant-pagination-item-link": {
      opacity: 0.4,
      cursor: "not-allowed",
      "&:hover": {
        transform: "none",
        boxShadow: "none",
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.surface,
        color: theme.colors.text
      }
    }
  },
  "& .ant-pagination-options": {
    marginLeft: "8px",
    "& .ant-select-selector": {
      backgroundColor: theme.colors.surface,
      borderColor: theme.colors.border,
      borderRadius: "8px",
      color: theme.colors.text,
      transition: "all 0.3s ease",
      "&:hover": {
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.primaryLight
      }
    },
    "@media (max-width: 768px)": {
      display: "none"
    }
  },
  "& .ant-pagination-total-text": {
    color: theme.colors.textSecondary,
    fontSize: "14px",
    fontWeight: 500,
    "@media (max-width: 768px)": {
      display: "none"
    }
  },
  "& .ant-table-empty .ant-table-tbody > tr > td": {
    padding: "40px 16px",
    textAlign: "center"
  },
  "& .ant-spin-nested-loading": {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: 0
  },
  "& .ant-spin-container": {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: 0
  },
  "& .ant-table-wrapper": {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: 0
  }
}))

export const StyledPagination = styled(AntPagination)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  marginBottom: "16px",
  "&.ant-pagination": {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    width: "100%"
  },
  // Левая часть — кнопки пагинации
  "& .ant-pagination-prev, & .ant-pagination-next, & .ant-pagination-item, & .ant-pagination-jump-prev, & .ant-pagination-jump-next": {
    order: 1
  },
  // Правая часть — текст "Таблица: 1-10 из 100"
  "& .ant-pagination-total-text": {
    order: 2,
    marginLeft: "auto",
    color: theme.colors.textSecondary,
    fontSize: "14px",
    fontWeight: 500
  },
  // Селект "по сколько показывать" сразу за текстом справа
  "& .ant-pagination-options": {
    order: 3,
    marginLeft: "8px",
    "& .ant-select-selector": {
      backgroundColor: theme.colors.surface,
      borderColor: theme.colors.border,
      borderRadius: "8px",
      color: theme.colors.text,
      transition: "all 0.3s ease",
      "&:hover": {
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.primaryLight
      }
    }
  },
  "& .ant-pagination-item": {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.border,
    minWidth: "36px",
    height: "36px",
    lineHeight: "34px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    "@media (max-width: 768px)": {
      minWidth: "32px",
      height: "32px",
      lineHeight: "30px"
    },
    "& a": {
      color: theme.colors.text,
      fontSize: "14px",
      fontWeight: 500,
      "@media (max-width: 768px)": {
        fontSize: "12px"
      }
    },
   
  },
  "& .ant-pagination-item-active": {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
    boxShadow: `0 4px 12px ${theme.colors.primaryLight}`,
    "& a": {
      color: theme.colors.white,
      fontWeight: 600
    },
    "&:hover": {
      backgroundColor: theme.colors.primaryHover,
      borderColor: theme.colors.primaryHover,
      // Сохраняем белый цвет текста при наведении,
      // чтобы он не "сливался" с цветом фона из дефолтных стилей Ant Design
      "& a": {
        color: theme.colors.white
      }
    }
  },
  "& .ant-pagination-prev, & .ant-pagination-next": {
    minWidth: "36px",
    height: "36px",
    borderRadius: "8px",
    "@media (max-width: 768px)": {
      minWidth: "32px",
      height: "32px"
    },
    "& .ant-pagination-item-link": {
      color: theme.colors.text,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.surface,
      borderRadius: "8px",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.primaryLight,
        color: theme.colors.primary,
        transform: "translateY(-2px)",
        boxShadow: `0 4px 8px ${theme.colors.primaryLight}`
      }
    }
  },
  "& .ant-pagination-disabled": {
    "& .ant-pagination-item-link": {
      opacity: 0.4,
      cursor: "not-allowed",
      "&:hover": {
        transform: "none",
        boxShadow: "none",
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.surface,
        color: theme.colors.text
      }
    }
  }
}))

export const EmptyStateContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "60px 20px",
  gap: "16px"
}))

export const EmptyStateIcon = styled.div(({ theme }) => ({
  fontSize: "64px",
  color: theme.colors.textSecondary,
  opacity: 0.5
}))

export const EmptyStateTitle = styled.h3(({ theme }) => ({
  margin: 0,
  fontSize: "18px",
  fontWeight: 600,
  color: theme.colors.text
}))

export const EmptyStateText = styled.p(({ theme }) => ({
  margin: 0,
  fontSize: "14px",
  color: theme.colors.textSecondary,
  textAlign: "center",
  maxWidth: "400px"
}))


