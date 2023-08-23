import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, CloseButton } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { getFilter, clearFilter } from '../../redux/todos/todosSlice';
import { Filtered } from '../../redux/todos/selectors';

import propTypes from 'prop-types';

const TodosFilter = ({ filter }) => {
  const filterValue = useSelector(Filtered);

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(getFilter(value));
  };

  const handleClearFilter = event => {
    event.target.blur();
    dispatch(clearFilter());
  };

  return (
    <Form className="d-flex mb-3">
      <Form.Label className="mb-0 d-flex align-items-center">
        <Form.Control
          type="text"
          name={filter}
          value={filterValue}
          onChange={handleChangeFilter}
          placeholder={t('placeholder_search')}
          className="me-2"
          aria-label="Search"
        />
        <CloseButton onClick={handleClearFilter} />
      </Form.Label>
    </Form>
  );
};

TodosFilter.propTypes = {
  filter: propTypes.string.isRequired,
};

export default TodosFilter;
