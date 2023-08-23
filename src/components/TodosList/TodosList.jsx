import React from 'react';
import { useSelector } from 'react-redux';
import { Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import {
  getFilteredTodos,
  getTotalTodos,
  getTotalPages,
} from '../../redux/todos/selectors';
import TodosItem from '../TodosItem/TodosItem';

const TodosList = () => {
  const filteredTodos = useSelector(getFilteredTodos);
  const totalTodos = useSelector(getTotalTodos);
  const totalPages = useSelector(getTotalPages);

  const { t } = useTranslation();

  return (
    <div className="mb-5">
      <div className="d-flex flex-wrap gap-3 align-items-center mb-3">
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
      {filteredTodos.length !== 0 ? (
        <Accordion alwaysOpen>
          {filteredTodos.map(
            ({
              _id,
              title,
              description,
              createdAt,
              updatedAt,
              plannedDate,
              completedDate,
              overdueDate,
            }) => {
              return (
                <TodosItem
                  key={_id}
                  _id={_id}
                  title={title}
                  description={description}
                  createdAt={createdAt}
                  updatedAt={updatedAt}
                  plannedDate={plannedDate}
                  completedDate={completedDate}
                  overdueDate={overdueDate}
                />
              );
            }
          )}
        </Accordion>
      ) : (
        <div className="text-center py-5 border rounded bs-accordion-bg">
          <p>{t('no_todos_text')}</p>
        </div>
      )}
    </div>
  );
};

export default TodosList;
