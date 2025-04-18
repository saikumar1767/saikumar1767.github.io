import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SnackbarProvider } from 'notistack';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css'

const theme = createTheme({
  components: {
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          fontSize: '2rem',
          fontFamily: 'Arial, sans-serif',
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={3000}
      >
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
)