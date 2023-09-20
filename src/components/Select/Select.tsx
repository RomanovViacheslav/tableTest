import { Typography, Chip } from '@mui/material';
import React, { memo } from 'react';
import { Box } from '@mui/system';
import { InputBase } from '../InputBase';
import {
  StyledFormControl,
  StyledIconWrapper,
  StyledMenuItem,
  StyledSelect,
} from './Select.styled';
import { ExitIcon } from '../../ui/icons';
import { SelectProps } from './Select.types';

export const Select = memo(
  ({
    value,
    onChange,
    data,
    name,
    onClear,
    onInputChange,
    defaultValue,
    multiple,
    ...props
  }: SelectProps) => {
    const handleClearSelect = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      if (onClear) {
        onClear();
      }
    };

    return (
      <StyledFormControl variant="standard">
        <StyledSelect
          {...props}
          value={value}
          onChange={onChange}
          inputProps={{ 'aria-label': name }}
          input={<InputBase />}
          displayEmpty
          multiple={multiple}
          renderValue={(selected) => {
            if (Array.isArray(selected) && selected.length > 0) {
              return (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              );
            }
            if (typeof selected === 'string' && selected) {
              const selectedElem = data?.find((elem) => elem === selected);
              return (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    '&& svg': {
                      position: 'static',
                      marginRight: '35px',
                      transform: 'none',
                      pointerEvents: 'auto',
                    },
                  }}
                >
                  <Typography>{selectedElem}</Typography>
                  <StyledIconWrapper onMouseDown={handleClearSelect}>
                    <ExitIcon />
                  </StyledIconWrapper>
                </Box>
              );
            }
            return <Typography>{name}</Typography>;
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                border: '1px solid',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
                maxHeight: '350px',
                width: '0px',
                overflowX: 'auto',
                '& ul': {
                  width: '100%',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                },
              },
            },
          }}
        >
          {data?.map((elem) => (
            <StyledMenuItem key={elem} value={elem}>
              {elem}
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </StyledFormControl>
    );
  },
);
