import React from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import { ThemeProviderWrapper, useThemeProvider } from "./theme/ThemeProvider";

function ThemedApp() {
  const { theme } = useThemeProvider();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProviderWrapper>
      <ThemedApp />
    </ThemeProviderWrapper>
  </React.StrictMode>
);
