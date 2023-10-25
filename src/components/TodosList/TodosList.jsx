import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ScrollToTopButton from '../../helpers/ScrollToTopButton';
import { getFoundTodos } from '../../redux/todos/selectors';
import { getPriorityTodo } from '../../redux/auth/authSelectors';
import TodosItem from '../TodosItem/TodosItem';
import { fetchAllTodos, fetchPriorityTodos } from 'redux/todos/operations';

import {
  getSearchQuery,
  getPage,
  getTotalTodos,
} from '../../redux/todos/selectors';
import { StatusEnum } from '../../constants/constants';

const TodosList = ({ statusTodo }) => {
  const [activeAccordionKey, setActiveAccordionKey] = useState([]);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const page = useSelector(getPage);
  const query = useSelector(getSearchQuery);
  const totalTodos = useSelector(getTotalTodos);
  const status = statusTodo;
  const foundTodos = useSelector(getFoundTodos);
  const priority = useSelector(getPriorityTodo);
  const todos = foundTodos;

  useEffect(() => {
    // console.log('TodosList useEffect');

    if (status === StatusEnum.PRIORITY) {
      dispatch(fetchPriorityTodos({ page, query }));
    } else {
      dispatch(fetchAllTodos({ page, query, status }));
    }
  }, [dispatch, page, query, totalTodos, priority, status]);

  useEffect(
    isAccordionOpen => {
      !isAccordionOpen && setIsAccordionOpen(false);
      setActiveAccordionKey([]);
    },
    [todos]
  );

  const handleToggleAccordion = () => {
    if (!isAccordionOpen && activeAccordionKey.length > 0) {
      todos.forEach(({ _id }) => {
        setActiveAccordionKey(prevStates => {
          if (prevStates.includes(_id)) {
            return prevStates;
          } else {
            return [...prevStates, _id];
          }
        });
      });
    } else if (!isAccordionOpen) {
      todos.forEach(({ _id }) => {
        setActiveAccordionKey(prevStates => {
          return [...prevStates, _id];
        });
      });
    } else {
      setActiveAccordionKey([]);
    }

    setIsAccordionOpen(prevState => !prevState);
  };

  const handleAccordionSelect = key => {
    setActiveAccordionKey(prevStates => {
      if (prevStates.includes(key)) {
        return prevStates.filter(id => id !== key);
      } else {
        return key;
      }
    });

    if (todos.length - 1 === activeAccordionKey.length) {
      setIsAccordionOpen(prevState => !prevState);
    }
  };

  return (
    <div className="mb-3 pb-5 position-relative d-flex flex-column">
      {todos && todos.length > 0 && (
        <Button
          variant="outline-primary"
          onClick={handleToggleAccordion}
          className="position-absolute bottom-0 start-0 ms-3"
        >
          {isAccordionOpen
            ? `${t('is_accordion_close')}`
            : `${t('is_accordion_open')}`}
        </Button>
      )}
      <ScrollToTopButton isAccordionOpen={isAccordionOpen} />
      {todos && todos.length !== 0 ? (
        <>
          <Accordion
            flush
            alwaysOpen
            activeKey={activeAccordionKey}
            onSelect={handleAccordionSelect}
            className="border"
          >
            {todos.map(
              ({
                _id,
                title,
                description,
                createdAt,
                updatedAt,
                plannedDate,
                completedDate,
                overdueDate,
                archivedDate,
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
                    archivedDate={archivedDate}
                  />
                );
              }
            )}
          </Accordion>
        </>
      ) : (
        <div className="text-center py-5 border rounded bs-accordion-bg">
          <p>{t('no_todos_text')}</p>
        </div>
      )}
    </div>
  );
};

export default TodosList;
