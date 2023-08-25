import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import TodosList from 'components/TodosList/TodosList';
import AddTodosForm from 'components/TodosForm/AddTodosForm';
import TodosFilter from '../../components/TodosFilter/TodosFilter';
import TodosStatistics from '../../components/TodosStatistics/TodosStatistics';
import GetPagination from '../../components/GetPagination/GetPagination';
import { fetchAllTodos } from 'redux/todos/operations';

import {
  Filtered,
  getPage,
  getTotalPages,
  getTotalTodos,
} from '../../redux/todos/selectors';
import { setPage } from '../../redux/todos/todosSlice';

export default function Todos() {
  const page = useSelector(getPage);
  const totalPages = useSelector(getTotalPages);
  const query = useSelector(Filtered);
  const totalTodos = useSelector(getTotalTodos);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTodos({ page, query }));
  }, [dispatch, page, query, totalTodos]);

  const handlePageChange = newPage => {
    dispatch(setPage(newPage));
    dispatch(fetchAllTodos({ page: newPage, query }));
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{t('helmet_title_todos_page')}</title>
      </Helmet>
      <div className="d-flex flex-column mt-5 pt-5">
        <AddTodosForm />
        <h1 className="mb-3 pt-5 text-center">{t('title_list_todo')}</h1>
        <div className="d-flex flex-wrap">
          <TodosFilter filter={query} page={page} />
          <TodosStatistics />
        </div>
        <TodosList />
        <GetPagination
          page={page}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </HelmetProvider>
  );
}
