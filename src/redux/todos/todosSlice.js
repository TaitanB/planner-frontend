import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllTodos,
  fetchAddTodo,
  fetchDeleteTodo,
  fetchUpdateTodo,
  fetchCompletedToggle,
} from './operations.js';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [], error: null },

  extraReducers: builder => {
    builder
      .addCase(fetchAllTodos.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(fetchAllTodos.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(fetchAddTodo.fulfilled, (state, { payload }) => {
        state.items.unshift(payload);
      })
      .addCase(fetchAddTodo.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(fetchUpdateTodo.fulfilled, (state, { payload }) => {
        state.items = state.items.map(todo => {
          if (todo._id === payload._id) {
            return payload;
          }
          return todo;
        });
      })
      .addCase(fetchUpdateTodo.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(fetchCompletedToggle.fulfilled, (state, { payload }) => {
        state.items = state.items.map(todo => {
          if (todo._id === payload._id) {
            todo.completedDate = payload.completedDate;
            return todo;
          }
          return todo;
        });
      })
      .addCase(fetchCompletedToggle.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(fetchDeleteTodo.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item._id !== payload._id);
      })
      .addCase(fetchDeleteTodo.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const todosReducer = todosSlice.reducer;
