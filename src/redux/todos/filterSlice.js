import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    getFilter(state, action) {
      return action.payload;
    },
    clearFilter(state, action) {
      return (state = '');
    },
  },
});

export const { getFilter, clearFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
