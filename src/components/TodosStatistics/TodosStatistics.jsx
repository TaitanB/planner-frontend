import React from 'react';
import { useSelector } from 'react-redux';
// import { Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { getTotalTodos, getTotalPages } from '../../redux/todos/selectors';

const TodosStatistics = () => {
  const totalTodos = useSelector(getTotalTodos);
  const totalPages = useSelector(getTotalPages);

  const { t } = useTranslation();

  return (
    <div className="d-flex flex-wrap gap-3 align-items-center mb-3 ms-auto">
      <div>
        {t('all_todos')}: <b>{totalTodos}</b>
      </div>
      <div>
        {t('page')}: <b>{totalPages}</b>
      </div>
      <div>
        {t('completed')}: <b>0</b>
      </div>
      <div>
        {t('is_overdue')}: <b>0</b>
      </div>
      <div>
        {t('archive')}: <b>0</b>
      </div>
    </div>
  );
};

export default TodosStatistics;
