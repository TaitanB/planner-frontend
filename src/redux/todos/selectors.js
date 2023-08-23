export const getTotalPages = state => state.todos.totalPages;

export const getPage = state => state.todos.page;

export const getTotalTodos = state => state.todos.totalTodos;

export const Filtered = state => state.todos.filter;

export const getFilteredTodos = state => {
  if (!state.todos.filter) {
    return state.todos.items;
  }
  const result = state.todos.items.filter(({ title, description }) => {
    return (
      title.toLowerCase().includes(state.todos.filter.toLowerCase()) ||
      description.toLowerCase().includes(state.todos.filter.toLowerCase())
    );
  });
  return result;
};

export const selectLoading = state => state.todos.loading;
