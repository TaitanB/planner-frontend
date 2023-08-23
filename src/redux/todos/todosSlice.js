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
  initialState: {
    items: [],
    page: 1,
    totalPages: 0,
    totalTodos: 0,
    filter: '',
    error: null,
  },

  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    getFilter: (state, { payload }) => {
      state.filter = payload;
      state.page = 1;
    },
    clearFilter(state, { payload }) {
      state.filter = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllTodos.fulfilled, (state, { payload }) => {
        state.totalPages = payload.totalPages;
        state.totalTodos = payload.total;
        state.items = payload.todos;
      })
      .addCase(fetchAllTodos.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(fetchAddTodo.fulfilled, (state, { payload }) => {
        state.items.unshift(payload);
        state.totalTodos += 1;
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
        state.totalTodos -= 1;
      })
      .addCase(fetchDeleteTodo.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const { setPage, getFilter, clearFilter } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
