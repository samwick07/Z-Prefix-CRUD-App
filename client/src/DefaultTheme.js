import { createTheme } from '@mui/material/styles';

const DefaultTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ff8080',
      },
      secondary: {
        main: '#80ffff',
      },
    },
});

export default DefaultTheme;