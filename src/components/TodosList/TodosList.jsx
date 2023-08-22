import React from 'react';
import { useSelector } from 'react-redux';
import { Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import propTypes from 'prop-types';

import { getFilteredTodos, getAllTodos } from '../../redux/todos/selectors';
import TodosItem from '../TodosItem/TodosItem';

const TodosList = filter => {
  const filteredTodos = useSelector(getFilteredTodos);
  const allTodos = useSelector(getAllTodos);

  const { t } = useTranslation();

  return (
    <div>
      <div className="d-flex flex-wrap gap-3 align-items-center mb-3">
        <div>
          {t('all_todos')}: <b>{allTodos.length}</b>
        </div>
        {filter.filter && (
          <div>
            {t('filtered_todos')}: <b>{filteredTodos.length}</b>
          </div>
        )}
      </div>
      {allTodos.length !== 0 ? (
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

TodosList.propTypes = {
  filter: propTypes.string.isRequired,
};

export default TodosList;
