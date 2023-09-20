import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { StyledBoxProps } from './MainLayout.types';

export const StyledBox = styled(Box)<StyledBoxProps>(({ theme }) => ({
  height: '100vh',
  margin: '0 auto',

  [theme.breakpoints.up('xs')]: {
    padding: '0 20px',
  },
  [theme.breakpoints.up('sm')]: {
    padding: '0 24px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '0 32px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '0 80px',
    maxWidth: '1500px',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '0 80px',
  },
}));
