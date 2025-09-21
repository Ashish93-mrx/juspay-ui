import { createTheme } from "@mui/material/styles";

const base = {
  spacing: 8,
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Inter"',
    h6: { fontWeight: 700 },
    subtitle1: { fontWeight: 600 },
    body1: { fontSize: 14 },
  },
};

export const lightTheme = createTheme({
  ...base,
  palette: {
    mode: "light",
    primary: { main: "#4C8BF5", contrastText: "#fff" },
    background: { default: "#FFFFFF", paper: "#FFFFFF" },
    text: { primary: "#0F1724", secondary: "#6B7280" },
    info: { main: "#1C1C1C66", secondary: "#FFFFFF66" },
    success: { main: "#16A34A" },
    error: { main: "#EF4444" },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 6px 18px rgba(12,18,26,0.04)",
        },
      },
    },
    MuiButton: { styleOverrides: { root: { textTransform: "none" } } },
  },
});

export const darkTheme = createTheme({
  ...base,
  palette: {
    mode: "dark",
    primary: { main: "#4C8BF5" },
    background: { default: "#0B0B0D", paper: "#0E0E10" },
    text: { primary: "#E6EEF5", secondary: "#AAB3C0" },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          background: "#0E0E10",
          boxShadow: "0 6px 18px rgba(0,0,0,0.6)",
        },
      },
    },
  },
});
