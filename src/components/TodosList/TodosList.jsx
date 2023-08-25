import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Accordion, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ScrollToTopButton from '../../helpers/ScrollToTopButton';
import { getFilteredTodos } from '../../redux/todos/selectors';
import TodosItem from '../TodosItem/TodosItem';

const TodosList = () => {
  const [activeAccordionKey, setActiveAccordionKey] = useState([]);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const filteredTodos = useSelector(getFilteredTodos);

  const { t } = useTranslation();

  useEffect(
    isAccordionOpen => {
      !isAccordionOpen && setIsAccordionOpen(false);
      setActiveAccordionKey([]);
    },
    [filteredTodos]
  );

  const handleToggleAccordion = () => {
    if (!isAccordionOpen && activeAccordionKey.length > 0) {
      filteredTodos.forEach(({ _id }) => {
        setActiveAccordionKey(prevStates => {
          if (prevStates.includes(_id)) {
            return prevStates;
          } else {
            return [...prevStates, _id];
          }
        });
      });
    } else if (!isAccordionOpen) {
      filteredTodos.forEach(({ _id }) => {
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

    if (filteredTodos.length - 1 === activeAccordionKey.length) {
      setIsAccordionOpen(prevState => !prevState);
    }
  };

  return (
    <div className="mb-3 pb-5 position-relative">
      <Button
        variant="outline-primary"
        onClick={handleToggleAccordion}
        className="position-absolute bottom-0 start-0"
      >
        {isAccordionOpen
          ? `${t('is_accordion_close')}`
          : `${t('is_accordion_open')}`}
      </Button>
      <ScrollToTopButton isAccordionOpen={isAccordionOpen} />
      {filteredTodos.length !== 0 ? (
        <Accordion
          alwaysOpen
          activeKey={activeAccordionKey}
          onSelect={handleAccordionSelect}
        >
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
