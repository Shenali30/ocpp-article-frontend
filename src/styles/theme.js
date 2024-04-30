import { green, purple, red } from '@mui/material/colors';
const { createTheme } = require('@mui/material');

export const mainTheme = createTheme({
  typography: {
    fontFamily: ['Favorit', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    subtitle1: {
      color: '#000000',
    },
  },
  palette: {
    primary: {
      main: '#5E35B1',
      light: red[500],
    },
    secondary: {
      main: green[500],
    },
    text: {
      primary: '#58595B',
      secondary: '#000000',
    },
    //   background: {
    //     default: '#EEF2F6',
    //   },
  },
  custom: {
    lightGrey: '#F2F2F2',
    // white: "#FFFFFF",
    // black: "#000000",
    // background: "#EEF2F6",
    // backgroundLight: "#EEF2F6",
    // border: "#707070",
    // borderLight: "#C8C8C8",
    // error: "#D32F2F",
    // imageBackground: "#E5E5E5",
    // disabled: "rgba(0, 0, 0, 0.26)",
  },
});
