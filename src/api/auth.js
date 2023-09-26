import axios from 'axios';

import { BASE_URL } from '../constants/constants';

const instance = axios.create({
  baseURL: BASE_URL,
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.Authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.Authorization = '';
};

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const data = await refresh();
      error.config.headers.Authorization = `Bearer ${data.accessToken}`;

      return instance(error.config);
    }
    return Promise.reject(error);
  }
);

export const register = async data => {
  const { data: result } = await instance.post('/api/users/register', data);
  setToken(result.accessToken);
  localStorage.setItem('refreshToken', result.refreshToken);

  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/api/users/login', data);
  setToken(result.accessToken);
  localStorage.setItem('refreshToken', result.refreshToken);

  return result;
};

export const logout = async () => {
  const data = await instance.post('/api/users/logout');
  setToken();

  return data;
};

export const getCurrent = async token => {
  setToken(token);
  const tokenNew = instance.defaults.headers.Authorization.split(' ')[1];
  const { data } = await instance.get('/api/users/current');

  return { tokenNew, data };
};

const refresh = async () => {
  const refreshToken = localStorage.getItem('refreshToken');

  try {
    const { data } = await instance.post('/api/users/refresh', {
      refreshToken,
    });

    setToken(data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);

    return data;
  } catch (error) {
    throw error;
  }
};

export default instance;
