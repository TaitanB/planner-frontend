import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_URL } from '../../constants/constants';
axios.defaults.baseURL = BASE_URL;

export const fetchAllTodos = createAsyncThunk(
  'todo/fetchAll',
  async ({ page, query }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/api/todos?query=${query}&page=${page}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const fetchStatusTodos = createAsyncThunk(
//   'todo/fetchStatus',
//   async ({ page, query, completed, overdue, archive }, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `/api/todos/status?query=${query}&page=${page}&completed=${completed}&overdue=${overdue}&archive=${archive}`
//       );

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

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
