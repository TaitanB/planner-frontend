export const getTotalPages = state => state.todos.totalPages;

export const getPage = state => state.todos.page;

export const getTotalTodos = state => state.todos.totalTodos;

export const getSearchQuery = state => state.todos.search;

export const getStatusTodo = state => state.todos.status;

export const getFoundTodos = state => {
  if (!state.todos.search) {
    return state.todos.items;
  }
  const result = state.todos.items.filter(({ title, description }) => {
    return (
      title.toLowerCase().includes(state.todos.search.toLowerCase()) ||
      description.toLowerCase().includes(state.todos.search.toLowerCase())
    );
  });
  return result;
};

export const selectLoading = state => state.todos.loading;
