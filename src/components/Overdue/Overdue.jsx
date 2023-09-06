import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TodosList from 'components/TodosList/TodosList';
import { fetchAllTodos } from 'redux/todos/operations';
import {
  SearchQuery,
  getPage,
  getTotalTodos,
} from '../../redux/todos/selectors';

const Overdue = () => {
  const page = useSelector(getPage);
  const query = useSelector(SearchQuery);
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
};

export default Overdue;
