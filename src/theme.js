import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        breakpoints: {
            values: {
                xs: 0,
                sm: 320,
                md: 480,
                lg: 768,
                xl: 1080,
                'xxl': 1200,
            }
        },
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        default: {
            main: '#fff'
        }
    },
});

export default theme;
