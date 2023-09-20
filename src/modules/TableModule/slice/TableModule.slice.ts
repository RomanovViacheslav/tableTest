import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TableModuleState } from '../TableModule.types';
import { fetchProducts } from './TableModule.thunks';

const initialState: TableModuleState = {
  filters: {
    name: '',
    type: '',
    tags: [],
  },
  products: [],
  loading: false,
  error: null,
  uniqueTypes: [],
  uniqueTags: [],
};

const tableModuleSlice = createSlice({
  name: 'tableModule',
  initialState,
  reducers: {
    updateFilters: (state, action: PayloadAction<TableModuleState['filters']>) => {
      state.filters = action.payload;
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.uniqueTypes = [...new Set(action.payload.map((product) => product.type))];
        state.uniqueTags = [...new Set(action.payload.flatMap((product) => product.tags))];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки данных';
      });
  },
});

export const { updateFilters, resetFilters } = tableModuleSlice.actions;
export default tableModuleSlice.reducer;
