import React, { useEffect } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ConfigProvider, theme as antdTheme } from "antd"
import ruRU from "antd/locale/ru_RU"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { ThemeProvider, useTheme } from "./contexts/ThemeContext"
import { App } from "./App"
import "./styles/global.css"

const { defaultAlgorithm, darkAlgorithm } = antdTheme

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000
    }
  }
})

const AppWithTheme: React.FC = () => {
  const { theme, themeMode } = useTheme()

  useEffect(() => {
    document.body.style.backgroundColor = theme.colors.background
    document.body.style.transition = "background-color 0.3s ease"
  }, [theme.colors.background])

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        locale={ruRU}
        theme={{
          algorithm: themeMode === "dark" ? darkAlgorithm : defaultAlgorithm,
          token: {
            colorPrimary: theme.colors.primary,
            colorPrimaryHover: theme.colors.primaryHover,
            colorBgBase: theme.colors.background,
            colorBgContainer: theme.colors.surface,
            colorTextBase: theme.colors.text,
            colorTextSecondary: theme.colors.textSecondary,
            colorError: theme.colors.danger,
            colorBorder: theme.colors.border,
            colorBorderSecondary: theme.colors.borderHover
          }
        }}
      >
        <StyledThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StyledThemeProvider>
      </ConfigProvider>
    </QueryClientProvider>
  )
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppWithTheme />
    </ThemeProvider>
  </React.StrictMode>
)


