'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

let theme = responsiveFontSizes(createTheme({
  cssVariables: true,

  typography: {
    fontFamily: 'var(--font-roboto)',
    fontSize:24,
    fontWeightBold : 'bold'
  },

  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
}));


export default theme;