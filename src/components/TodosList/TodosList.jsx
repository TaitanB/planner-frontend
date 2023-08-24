import React from 'react';
import { useSelector } from 'react-redux';
import { Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { getFilteredTodos } from '../../redux/todos/selectors';
import TodosItem from '../TodosItem/TodosItem';

const TodosList = () => {
  const filteredTodos = useSelector(getFilteredTodos);

  const { t } = useTranslation();

  return (
    <div className="mb-5">
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
