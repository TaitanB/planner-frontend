import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TodosList from 'components/TodosList/TodosList';
import { fetchAllTodos } from 'redux/todos/operations';
import { Filtered, getPage, getTotalTodos } from '../../redux/todos/selectors';

export default function Todos() {
  const page = useSelector(getPage);
  const query = useSelector(Filtered);
  const totalTodos = useSelector(getTotalTodos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTodos({ page, query }));
  }, [dispatch, page, query, totalTodos]);

  return (
    <div className="d-flex flex-column">
      <TodosList />
    </div>
  );
}
