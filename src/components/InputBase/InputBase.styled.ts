import { InputBase, OutlinedInput } from '@mui/material';
import styled from '@emotion/styled';
import { StyledInputProps } from './InputBase.types';

export const StyledInput = styled(OutlinedInput)<StyledInputProps>(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderWidth: '1px',
    borderColor: theme.palette.grey[400],
  },
  borderRadius: '8px',
  background: theme.palette.grey[900],
  height: '45px',
  width: '100%',

  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderWidth: '1px',
      borderColor: theme.palette.primary.dark,

  },
}));
