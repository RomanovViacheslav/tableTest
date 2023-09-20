import { TableContainer, Paper } from '@mui/material';
import React, { memo } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TableProps } from './Table.types';

export const Table = memo(({ rows, columns, ...props }: TableProps) => (
  <TableContainer component={Paper}>
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      autoHeight
      getRowHeight={() => 'auto'}
      disableColumnMenu
      pageSizeOptions={[5, 10]}
      checkboxSelection
      {...props}
    />
  </TableContainer>
));
