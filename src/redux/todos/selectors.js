export const getAllTodos = state => state.todos.items;

export const Filtered = state => state.filter;

export const getFilteredTodos = state => {
  if (!state.filter) {
    return state.todos.items;
  }
  const result = state.todos.items.filter(({ title }) => {
    return title.toLowerCase().includes(state.filter.toLowerCase());
  });
  return result;
};

export const selectLoading = state => state.todos.loading;
