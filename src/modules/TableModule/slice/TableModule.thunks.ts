import { createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../../../store';
import { filterData } from '../helpers';
import { dataMock } from '../../../__mocks__';

export const fetchProducts = createAsyncThunk(
  'tableModule/fetchProducts',
  async (_, { getState }) => {
    try {
      const state = getState() as RootState;
      const { filters } = state.table;
      const data = filterData(dataMock, filters);

      return data;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
      throw new Error('Ошибка');
    }
  },
);
