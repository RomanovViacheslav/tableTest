import { createTheme, Theme } from '@mui/material';
import { lightBlue, deepPurple } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export type ThemeType = typeof theme;
