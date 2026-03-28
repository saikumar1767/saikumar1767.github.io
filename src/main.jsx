import React from "react";
import ReactDOM from "react-dom/client";
import { SnackbarProvider } from "notistack";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App.jsx";
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily:
      '"Instrument Sans", "DM Sans", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
  },
  components: {
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          fontSize: "0.95rem",
          fontWeight: 600,
          borderRadius: 18,
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={3200}
      >
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
