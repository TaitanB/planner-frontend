import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Form, CloseButton, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { getFilter, clearFilter } from '../../redux/todos/todosSlice';

const TodosFilter = () => {
  const [searchValue, setSearchValue] = useState('');

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleSearch = () => {
    console.log(searchValue);
    dispatch(getFilter(searchValue));
  };

  const handleClearFilter = event => {
    event.target.blur();
    dispatch(clearFilter());
    setSearchValue('');
  };

  return (
    <Form className="d-flex mb-3">
      <Form.Label className="mb-0 d-flex align-items-center">
        <Form.Control
          type="text"
          name={searchValue}
          value={searchValue}
          onChange={event => setSearchValue(event.target.value)}
          placeholder={t('placeholder_search')}
          className="me-2"
          aria-label="Search"
        />
        <Button onClick={handleSearch} variant="outline-primary me-2">
          {t('placeholder_search')}
        </Button>
        <CloseButton onClick={handleClearFilter} />
      </Form.Label>
    </Form>
  );
};

export default TodosFilter;
