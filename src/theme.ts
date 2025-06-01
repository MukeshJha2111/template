// theme.ts
import { createTheme } from '@mui/material/styles';

const brownTheme = createTheme({
  palette: {
    primary: {
      main: '#8d6e63',       // warm brown
      contrastText: '#fff',
    },
    secondary: {
      main: '#bcaaa4',       // lighter brown
      contrastText: '#4b3b30',
    },
    background: {
      default: '#fdf5f0',    // light cream/brownish background
      paper: '#f5ebe0',      // cream background for cards/paper
    },
    text: {
      primary: '#4b3b30',    // dark brown text
      secondary: '#a09486',  // muted brown text
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h4: {
      fontWeight: 800,
      color: '#4b3b30',
    },
    subtitle1: {
      color: '#4b3b30',
    },
    caption: {
      color: '#a09486',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#8d6e63',
          '&:hover': {
            backgroundColor: '#6d4c41',
          },
          color: '#fff',
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#fdf5f0',
          color: '#4b3b30',
          boxShadow: '0 1px 6px rgba(75, 59, 48, 0.1)',
        },
      },
    },
  },
});

export default brownTheme;
