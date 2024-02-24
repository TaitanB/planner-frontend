import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api/todos';

export const fetchAllTodos = createAsyncThunk(
  'todo/fetchAll',
  async ({ page, query, status }, thunkAPI) => {
    try {
      const data = await api.getTodos(page, query, status);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchPriorityTodos = createAsyncThunk(
  'todo/fetchPriority',
  async ({ page, query }, thunkAPI) => {
    // console.log(page, query);
    try {
      const data = await api.getTodos(page, query);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchTogglePriorityTodo = createAsyncThunk(
  'todo/togglePriority',
  async (_id, { rejectWithValue }) => {
    try {
      const result = await api.togglePriority(_id);
      return { _id, result };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchAddTodo = createAsyncThunk(
  'todo/addTodo',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addTodo(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchDeleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async (_id, { rejectWithValue }) => {
    try {
      const result = await api.removeTodo(_id);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchUpdateTodo = createAsyncThunk(
  'todo/updateTodo',
  async ({ _id, description }, { rejectWithValue }) => {
    try {
      const result = await api.updateTodo(_id, description);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchCompletedToggle = createAsyncThunk(
  'todo/completedToggle',
  async (_id, { rejectWithValue }) => {
    try {
      const result = await api.completedTodo(_id);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchArchivedToggle = createAsyncThunk(
  'todo/archivedToggle',
  async (_id, { rejectWithValue }) => {
    try {
      const result = await api.archivedTodo(_id);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
