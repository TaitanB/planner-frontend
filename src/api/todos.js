import instance from './auth';

export const getTodos = async (page, query) => {
  const { data } = await instance.get(`/api/todos?query=${query}&page=${page}`);

  return data;
};

export const addTodo = async data => {
  const { data: result } = await instance.post('/api/todos', data);
  return result;
};

export const removeTodo = async _id => {
  const { data: result } = await instance.delete(`/api/todos/delete/${_id}`);
  //   console.log(result);
  return result;
};

export const updateTodo = async (_id, description) => {
  const { data: result } = await instance.patch(`/api/todos/update/${_id}`, {
    description,
  });
  return result;
};

export const completedTodo = async _id => {
  const { data: result } = await instance.patch(`/api/todos/completed/${_id}`);
  //   console.log(result);
  return result;
};
