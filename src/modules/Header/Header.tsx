import { Box } from '@mui/system';
import React from 'react';
import { LogoIcon, ToggleIcon } from '../../ui/icons';

export const Header = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    component="header"
    mt="35px"
    mb="35px"
    height="80px"
  >
    <LogoIcon />
  </Box>
);
