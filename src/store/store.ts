import { configureStore } from '@reduxjs/toolkit';

import { tableModuleSlice } from '../modules/TableModule/slice';

export const store = configureStore({
  reducer: {
    table: tableModuleSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
