import styled from '@emotion/styled';
import { FormControl, Select, MenuItem, Box } from '@mui/material';
import { StyledSelectProps } from './Select.types';

export const StyledFormControl = styled(FormControl)<StyledSelectProps>(({ theme }) => ({
  width: '100%',

}));

export const StyledSelect = styled(Select)<StyledSelectProps>(({ theme, open }) => ({

  '& .MuiSelect-select.MuiInputBase-input': {
    minHeight: 'auto',
    paddingRight: '0px !important',
    padding: '0 15px',
    '&:focus ': {

    },
    '& p': {

    },
  },
  '& p': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '80%',
  },
  '& svg': {
    position: 'absolute',
    fill: theme.palette.info.main,
    right: '0',
    marginRight: '15px',
    marginLeft: '10px',
    pointerEvents: 'none',
    '& path': {
      fill: theme.palette.info.main,
    },
  },
}));

export const StyledMenuItem = styled(MenuItem)<StyledSelectProps>(({ theme }) => ({
  height: '40px',
  padding: '0 30px',
  '&:focus, :hover': {

        },
  '&.Mui-selected:hover, &.Mui-selected.Mui-focusVisible': {

    },
}));

export const StyledIconWrapper = styled(Box)<StyledSelectProps>(({ theme }) => ({
}));
