import { alpha } from '@mui/material'
import createTheme, { ThemeOptions } from '@mui/material/styles/createTheme'

const blueBase = '#698996'
const pinkBase = '#f08faf'
const redBase = '#AE2012'
const orangeBase = '#EE9B00'
const greenBase = '#588157'
const infoBase = '#0A9396'

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: alpha(blueBase, 0.7),
      dark: alpha(blueBase, 0.9),
      light: alpha(blueBase, 0.5),
    },
    secondary: {
      main: alpha(pinkBase, 0.7),
      dark: alpha(pinkBase, 0.9),
      light: alpha(pinkBase, 0.5),
    },
    error: {
      main: alpha(redBase, 0.7),
      dark: alpha(redBase, 0.9),
      light: alpha(redBase, 0.5),
    },
    warning: {
      main: alpha(orangeBase, 0.7),
      dark: alpha(orangeBase, 0.9),
      light: alpha(orangeBase, 0.5),
    },
    success: {
      main: alpha(greenBase, 0.7),
      dark: alpha(greenBase, 0.9),
      light: alpha(greenBase, 0.5),
    },
    info: {
      main: alpha(infoBase, 0.7),
      dark: alpha(infoBase, 0.9),
      light: alpha(infoBase, 0.5),
    },
  },
  shape: {
    borderRadius: 25,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Disable uppercase transformation
          borderRadius: '25px', // Default button shape
        },
      },
    },
  },
}

const theme = createTheme(themeOptions)

export default theme
