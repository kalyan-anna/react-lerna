import { Theme, createMuiTheme } from '@material-ui/core';

import { customColors } from './colors';

export const customTheme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: customColors.primary,
    },
    secondary: {
      main: customColors.secondary,
    },
  },
  typography: {
    body2: {
      fontSize: '1rem',
    },
  },
});
