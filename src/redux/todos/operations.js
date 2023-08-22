import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3001';

export const fetchAllTodos = createAsyncThunk(
  'todo/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/todos');

      return response.data.todos;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAddTodo = createAsyncThunk(
  'todo/addTodo',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/todos', data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/api/todos/delete/${_id}`);

      if (response.status === 200) {
        return { _id };
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUpdateTodo = createAsyncThunk(
  'todo/updateTodo',
  async ({ _id, description }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/api/todos/update/${_id}`, {
        description,
      });

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCompletedToggle = createAsyncThunk(
  'todo/completedToggle',
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/api/todos/completed/${_id}`);

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
