import styled from '@emotion/styled';
import { TableBody, TableHead } from '@mui/material';
import { StyledSelectProps } from '../Select/Select.types';

export const StyledTableHead = styled(TableHead)<StyledSelectProps>(({ theme }) => ({
  background: theme.palette.secondary.dark,
  height: '100%',

}));
