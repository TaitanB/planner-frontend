import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { MdOutlineDeleteForever, MdBorderColor } from 'react-icons/md';
import { BsDatabaseCheck } from 'react-icons/bs';

import propTypes from 'prop-types';

import { getAllTodos } from '../../redux/todos/selectors';
import {
  fetchDeleteTodo,
  fetchUpdateTodo,
  fetchCompletedToggle,
} from '../../redux/todos/operations';
import { getDate } from '../../helpers/getDate';

import { Accordion, Button, Form } from 'react-bootstrap';
import UpdateTodosForm from 'components/TodosForm/UpdateTodosForm';

const TodosItem = ({
  _id,
  title,
  description,
  createdAt,
  updatedAt,
  plannedDate,
  completedDate,
  overdueDate,
}) => {
  const [checked, setChecked] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [descriptionUpdate, setDescriptionUpdate] = useState(description);

  const selectedLanguage = localStorage.getItem('selectedLanguage');

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const allTodos = useSelector(getAllTodos);

  useEffect(() => {
    if (allTodos.length !== 0) {
      const initialCheckedState = allTodos.reduce((checkedState, todo) => {
        if (todo.completedDate !== null) {
          checkedState[todo._id] = true;
        }
        return checkedState;
      }, {});
      setChecked(initialCheckedState);
    }
  }, [allTodos]);

  useEffect(() => {
    const tooltips = Array.from(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltips.forEach(tooltip => {
      new window.bootstrap.Tooltip(tooltip);
    });
  }, [selectedLanguage]);

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'description':
        setDescriptionUpdate(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(fetchUpdateTodo({ _id: _id, description: descriptionUpdate }));

    toast.success(`${t('todo_update')}`);

    setIsEditing(false);
  };

  const deleteTodo = _id => {
    dispatch(fetchDeleteTodo(_id));

    toast.success(`${t('todo_deleted')}`);
  };

  const isCompleted = checked[_id] || false;

  const completedToggle = _id => {
    dispatch(fetchCompletedToggle(_id));

    !isCompleted
      ? toast.success(`${t('todo_completed')}`)
      : toast.success(`${t('todo_not_completed')}`);
  };

  const handleToggle = (e, _id) => {
    e.target.blur();
    const updatedChecked = { ...checked };
    updatedChecked[_id] = e.currentTarget.checked;
    setChecked(updatedChecked);
    completedToggle(_id);
  };

  const reset = () => {
    setIsEditing(false);
    setDescriptionUpdate(description);
  };

  return (
    <Accordion.Item eventKey={_id}>
      <div className="d-flex gap-3 align-items-center px-3">
        {overdueDate === null && (
          <Form.Check
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title={`${t('is_completed')}`}
            aria-label="option 1"
            id={`toggle-check-${_id}`}
            type="checkbox"
            variant="outline-primary"
            checked={isCompleted}
            disabled={isEditing === true}
            value="1"
            onChange={e => handleToggle(e, _id)}
          />
        )}
        {overdueDate !== null && (
          <Form.Check
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title={`${t('is_overdue')}`}
            isInvalid
            defaultChecked
            type="radio"
            id={`toggle-check-${_id}`}
          />
        )}
        <Accordion.Header className="w-100">
          <h5
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title={title}
            className="w-100 mb-0 text-truncate custom-accordion-header"
          >
            {title}
          </h5>
        </Accordion.Header>
        {isCompleted || overdueDate !== null ? (
          <Button
            key={`archive-${_id}`}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title={`${t('add_to_archive')}`}
            className="ms-auto btn btn-success"
            type="button"
            // onClick={() => toArchiveTodo(_id)}
          >
            <BsDatabaseCheck />
          </Button>
        ) : (
          <Button
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title={`${t('delete')}`}
            disabled={isEditing}
            className="ms-auto btn btn-danger"
            type="button"
            onClick={() => deleteTodo(_id)}
          >
            <MdOutlineDeleteForever />
          </Button>
        )}
      </div>
      <Accordion.Body className="p-3" onExited={() => setIsEditing(false)}>
        {!isEditing ? (
          <>
            <p className="mb-3">{description}</p>

            <div className="d-flex flex-wrap gap-3 align-items-center">
              <div>
                {t('created')}: <b>{getDate(createdAt)}</b>
              </div>
              <div>
                {t('updated')}: <b> {getDate(updatedAt)}</b>
              </div>
              <div>
                {t('planned_date')}: <b> {getDate(plannedDate)}</b>
              </div>
              {overdueDate === null && (
                <div className={isCompleted ? 'text-success' : ''}>
                  {t('completed')}:
                  <b> {isCompleted ? getDate(completedDate) : '??.??.????'}</b>
                </div>
              )}
              {overdueDate !== null && (
                <div className="text-danger">
                  {t('is_overdue')}: <b>{getDate(overdueDate)}</b>
                </div>
              )}
              <Button
                data-bs-title={`${t('edit')}`}
                disabled={isCompleted || overdueDate !== null}
                className="ms-auto btn btn-primary"
                type="button"
                onClick={() => setIsEditing(true)}
              >
                <MdBorderColor />
              </Button>
            </div>
          </>
        ) : (
          <UpdateTodosForm
            handleSubmit={handleSubmit}
            descriptionUpdate={descriptionUpdate}
            handleChange={handleChange}
            description={description}
            reset={reset}
          />
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
};

TodosItem.propTypes = {
  _id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  createdAt: propTypes.string.isRequired,
  updatedAt: propTypes.string.isRequired,
  completedDate: propTypes.string,
};

export default TodosItem;
