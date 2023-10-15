import React from 'react';
import { useSelector } from 'react-redux';
import TodosList from 'components/TodosList/TodosList';
import { getStatusTodo } from '../../redux/todos/selectors';

export default function AllTodos() {
  const status = useSelector(getStatusTodo);

  return <TodosList statusTodo={status} />;
}
