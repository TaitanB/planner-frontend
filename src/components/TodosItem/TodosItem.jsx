import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import {
  MdOutlineDeleteForever,
  MdBorderColor,
  MdOutlineRefresh,
} from 'react-icons/md';
import { BsDatabaseCheck } from 'react-icons/bs';
import {
  Accordion,
  Button,
  Form,
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap';

import propTypes from 'prop-types';

import {
  fetchDeleteTodo,
  fetchUpdateTodo,
  fetchCompletedToggle,
} from '../../redux/todos/operations';
import UpdateTodosForm from 'components/TodosForm/UpdateTodosForm';
import useMobileStyle from '../../hooks/useMobileStyle';
import useLocalDate from '../../hooks/useLocalDate';

const TodosItem = ({
  _id,
  title,
  description,
  createdAt,
  updatedAt,
  plannedDate,
  completedDate,
  overdueDate,
  refreshDate,
  archiveDate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [descriptionUpdate, setDescriptionUpdate] = useState(description);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const isCompleted = completedDate !== null;
  const isOverdue = overdueDate !== null;
  const isRefresh = refreshDate !== null;
  const isArchive = archiveDate !== null;

  const isMobileStyle = useMobileStyle();

  const localCreatedAt = useLocalDate(createdAt);
  const localUpdatedAt = useLocalDate(updatedAt);
  const localPlannedDate = useLocalDate(plannedDate);
  const localCompletedDate = useLocalDate(completedDate);
  const localOverdueDate = useLocalDate(overdueDate);
  const localRefreshDate = useLocalDate(refreshDate);
  const localArchiveDate = useLocalDate(archiveDate);

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

  const completedToggle = _id => {
    dispatch(fetchCompletedToggle(_id));

    !isCompleted
      ? toast.success(`${t('todo_completed')}`)
      : toast.success(`${t('todo_not_completed')}`);
  };

  const handleToggle = (e, _id) => {
    e.target.blur();

    completedToggle(_id);
  };

  const reset = () => {
    setIsEditing(false);
    setDescriptionUpdate(description);
  };

  return (
    <Accordion.Item eventKey={_id}>
      <div className="d-flex gap-3 align-items-center px-3">
        {!isOverdue && (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{t('is_completed')}</Tooltip>}
          >
            <Form.Check
              aria-label="option 1"
              id={`toggle-check-${_id}`}
              type="checkbox"
              variant="outline-primary"
              checked={isCompleted}
              disabled={isEditing === true}
              value="1"
              onChange={e => handleToggle(e, _id)}
            />
          </OverlayTrigger>
        )}
        {isOverdue && (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{t('is_overdue')}</Tooltip>}
          >
            <Form.Check
              isInvalid
              defaultChecked
              type="radio"
              id={`toggle-check-${_id}`}
            />
          </OverlayTrigger>
        )}
        <Accordion.Header className="w-100">
          {isMobileStyle ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>{title}</Tooltip>}
            >
              <h5 className="w-100 mb-0 text-truncate custom-accordion-header">
                {title}
              </h5>
            </OverlayTrigger>
          ) : (
            <h5 className="w-100 mb-0 text-truncate custom-accordion-header">
              {title}
            </h5>
          )}
        </Accordion.Header>
        {isCompleted || isOverdue ? (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{`${t('add_to_archive')}`}</Tooltip>}
          >
            <Button
              key={`archive-${_id}`}
              className="ms-auto btn btn-success"
              type="button"
              // onClick={() => toArchiveTodo(_id)}
            >
              <BsDatabaseCheck />
            </Button>
          </OverlayTrigger>
        ) : (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{`${t('delete')}`}</Tooltip>}
          >
            <Button
              disabled={isEditing}
              className="ms-auto btn btn-danger"
              type="button"
              onClick={() => deleteTodo(_id)}
            >
              <MdOutlineDeleteForever />
            </Button>
          </OverlayTrigger>
        )}
      </div>
      <Accordion.Body className="p-3" onExited={() => setIsEditing(false)}>
        {!isEditing ? (
          <>
            <p className="mb-3 border rounded p-2">{description}</p>

            <div className="d-flex flex-wrap gap-3 align-items-center">
              <div>
                {t('created')}: <b>{localCreatedAt}</b>
              </div>
              <div>
                {t('updated')}: <b> {localUpdatedAt}</b>
              </div>
              <div>
                {t('planned_date')}: <b> {localPlannedDate}</b>
              </div>
              {!isOverdue && (
                <div className={isCompleted ? 'text-success' : ''}>
                  {t('completed')}:
                  <b> {isCompleted ? localCompletedDate : '??.??.????'}</b>
                </div>
              )}
              {isOverdue && (
                <div className="text-danger">
                  {t('is_overdue')}: <b>{localOverdueDate}</b>
                </div>
              )}
              {isRefresh && (
                <div className="text-primary">
                  {t('is_refresh')}: <b>{localRefreshDate}</b>
                </div>
              )}
              {isArchive && (
                <div className="text-warning">
                  {t('archive')}: <b>{localArchiveDate}</b>
                </div>
              )}

              {isOverdue ? (
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>{`${t('refresh')}`}</Tooltip>}
                >
                  <Button
                    className="ms-auto btn btn-primary"
                    type="button"
                    // onClick={() => toRefreshTodo(_id)}
                  >
                    <MdOutlineRefresh />
                  </Button>
                </OverlayTrigger>
              ) : (
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>{`${t('edit')}`}</Tooltip>}
                >
                  <Button
                    disabled={isCompleted}
                    className="ms-auto btn btn-primary"
                    type="button"
                    onClick={() => setIsEditing(true)}
                  >
                    <MdBorderColor />
                  </Button>
                </OverlayTrigger>
              )}
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
  overdueDate: propTypes.string,
  archiveDate: propTypes.string,
};

export default TodosItem;
