import instance from './auth';

export const getTodos = async (page, query, status) => {
  let url = `/api/todos?query=${query}&page=${page}`;
  // console.log(status);
  if (status) {
    url += `&status=${status}`;
  }

  const { data } = await instance.get(url);

  return data;
};

export const addTodo = async data => {
  const { data: result } = await instance.post('/api/todos', data);
  return result;
};

export const removeTodo = async _id => {
  const { data: result } = await instance.delete(`/api/todos/delete/${_id}`);
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
  return result;
};

export const archivedTodo = async _id => {
  const { data: result } = await instance.patch(`/api/todos/archived/${_id}`);
  return result;
};
