import { createMuiTheme } from '@material-ui/core';
import { customColors } from './colors';
export var customTheme = createMuiTheme({
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
