import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    action: {
      hover: '#f2f3f7ab',
    },
    secondary: {
      main: '#544CFF',
    },
    primary: {
      main: '#5572FB',
    },
  },
  typography: {
    useNextVariants: true,
  },

  overrides: {
    MuiButton: {
      root: {
        color: '#CECECE',
      },
    },
  },
});

export default theme;
