import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import TodosList from 'components/TodosList/TodosList';
import AddTodosForm from 'components/TodosForm/AddTodosForm';
import ContactsFilter from '../../components/TodosFilter/TodosFilter';
import { fetchAllTodos } from 'redux/todos/operations';
import { Filtered } from '../../redux/todos/selectors';

export default function Contacts() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const filterValue = useSelector(Filtered);

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{t('helmet_title_todos_page')}</title>
      </Helmet>
      <div className="min-vh-100">
        <AddTodosForm />
        <h1 className="mb-3 pt-5 text-center">{t('title_list_todo')}</h1>
        <ContactsFilter filter={filterValue} />
        <TodosList filter={filterValue} />
      </div>
    </HelmetProvider>
  );
}
