import styled from '@emotion/styled';
import { List } from '@mui/material';
import { StyledListProps } from './Sidebar.types';

export const StyledList = styled(List)<StyledListProps>(({ theme }) => ({
  background: theme.palette.grey[900],
  height: '100%',
  width: '250px',
  marginRight: '16px',
  borderColor: theme.palette.grey[100],
}));
