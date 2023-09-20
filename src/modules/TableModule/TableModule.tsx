import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader, Table } from '../../components';
import { useTableColumns } from './helpers';
import { useAppDispatch, useAppSelector } from '../../shared';
import { fetchProducts, resetFilters } from './slice';
import { FiltersForm } from './components';

export const TableModule = () => {
  const columns = useTableColumns();
  const dispatch = useAppDispatch();
  const { products, filters, loading } = useAppSelector((state) => state.table);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/cmdb/servers-pc') {
      dispatch(fetchProducts());
    }
  }, [location.pathname, filters]);

  useEffect(
    () => () => {
      dispatch(resetFilters());
    },
    [],
  );

  return (
    <Box width="100%">
      <FiltersForm />
      {loading ? (
        <Loader />
      ) : (
        <Table
          columns={columns}
          rows={products}
        />
      )}
    </Box>
  );
};
