import React from 'react';
import { Box } from '@mui/material';
import { Header, Sidebar, TableModule } from '../../modules';

const MainPage = () => (
  <Box display="flex" flexDirection="column" height="100%" width="100%">
    <Header />
    <Box display="inline-block">
      <Box display="flex" alignItems="center" height="100%" pb="26px">
        <Sidebar />
        <TableModule />
      </Box>
    </Box>
  </Box>
);

export default MainPage;
