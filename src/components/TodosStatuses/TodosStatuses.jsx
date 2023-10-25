import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { getStatus } from '../../redux/todos/todosSlice';
import {
  getTotalTodos,
  getFoundTodos,
  getStatusTodo,
} from '../../redux/todos/selectors';
import { StatusEnum } from '../../constants/constants';

const TodosStatuses = () => {
  const totalTodos = useSelector(getTotalTodos);
  const foundTodos = useSelector(getFoundTodos);
  const statusTodo = useSelector(getStatusTodo);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleStatusChange = status => {
    console.log(status);
    dispatch(getStatus(status));
  };

  return (
    <Form className="d-flex flex-wrap gap-3 ms-auto mb-3">
      {Object.values(StatusEnum).map(status => (
        <Form.Check
          className="p-0 me-3 mb-0 position-relative"
          key={`radio-${status}`}
          type="radio"
          id={`radio-${status}`}
        >
          <Form.Check.Input
            name="groupStatus"
            className="btn-check"
            type="radio"
            defaultChecked={status === StatusEnum.PRIORITY}
            onChange={() => handleStatusChange(status)}
          />
          <Form.Check.Label className="btn btn-outline-primary">
            {t(status)}
            {statusTodo === status &&
              (status === StatusEnum.PRIORITY ? (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                  {`${foundTodos.length}/${totalTodos}`}
                </span>
              ) : (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                  {`${foundTodos.length} / ${totalTodos}`}
                </span>
              ))}
          </Form.Check.Label>
        </Form.Check>
      ))}
    </Form>
  );
};

export default TodosStatuses;
