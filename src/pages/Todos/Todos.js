import React, { Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Outlet } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import AddTodosForm from 'components/TodosForm/AddTodosForm';
import TodosFilter from '../../components/TodosSearch/TodosSearch';
import TodosStatuses from '../../components/TodosStatuses/TodosStatuses';
import GetPagination from '../../components/GetPagination/GetPagination';
import { fetchAllTodos, fetchPriorityTodos } from 'redux/todos/operations';
import { Loader } from 'components/Loader/Loader';
import {
  getSearchQuery,
  getPage,
  getTotalPages,
  getStatusTodo,
} from '../../redux/todos/selectors';
import { setPage } from '../../redux/todos/todosSlice';
import { StatusEnum } from '../../constants/constants';

export default function Todos() {
  const page = useSelector(getPage);
  const totalPages = useSelector(getTotalPages);
  const query = useSelector(getSearchQuery);
  const status = useSelector(getStatusTodo);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handlePageChange = newPage => {
    dispatch(setPage(newPage));
    if (status === StatusEnum.PRIORITY) {
      dispatch(fetchPriorityTodos({ page: newPage, query }));
    } else {
      dispatch(fetchAllTodos({ page: newPage, query, status }));
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{t('helmet_title_todos_page')}</title>
      </Helmet>
      <div className="d-flex flex-column mt-5 pt-5">
        <AddTodosForm />
        <div className="d-flex flex-wrap gap-3 align-items-end">
          <TodosFilter filter={query} page={page} />
          <TodosStatuses />
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <GetPagination
          page={page}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </HelmetProvider>
  );
}
