import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllTodos,
  fetchAddTodo,
  fetchDeleteTodo,
  fetchUpdateTodo,
  fetchCompletedToggle,
  fetchArchivedToggle,
  fetchPriorityTodos,
} from './operations.js';
import { StatusEnum } from '../../constants/constants';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    page: 1,
    totalPages: 0,
    totalTodos: 0,
    search: '',
    status: StatusEnum.PRIORITY,
    error: null,
  },

  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    getSearch: (state, { payload }) => {
      state.search = payload;
      state.page = 1;
    },
    clearSearch(state, { payload }) {
      state.search = '';
    },
    getStatus: (state, { payload }) => {
      state.status = payload;
      state.page = 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPriorityTodos.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.totalPages = payload.totalPages;
        state.totalTodos = payload.total;
        state.items = payload.todos;
      })
      .addCase(fetchPriorityTodos.rejected, (state, { payload }) => {
        state.error = payload;
      })
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
      .addCase(fetchArchivedToggle.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.items = state.items.map(todo => {
          if (todo._id === payload._id) {
            if (todo.archivedDate !== null) {
              todo.archivedDate = payload.archivedDate;
              todo.overdueDate = payload.overdueDate;
              todo.plannedDate = payload.plannedDate;
              todo.updatedAt = payload.updatedAt;
            }

            todo.archivedDate = payload.archivedDate;

            return todo;
          }
          return todo;
        });
      })
      .addCase(fetchArchivedToggle.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(fetchDeleteTodo.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item._id !== payload);
        state.totalTodos -= 1;
      })
      .addCase(fetchDeleteTodo.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const { setPage, getSearch, clearSearch, getStatus } =
  todosSlice.actions;

export const todosReducer = todosSlice.reducer;
