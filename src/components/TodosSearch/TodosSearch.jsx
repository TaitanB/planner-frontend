import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Form, CloseButton, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { MdSearch } from 'react-icons/md';
import { getSearch, clearSearch } from '../../redux/todos/todosSlice';

const TodosSearch = () => {
  const [searchValue, setSearchValue] = useState('');

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(getSearch(searchValue));
  };

  const handleClearSearch = event => {
    event.target.blur();
    dispatch(clearSearch());
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
        <Button onClick={handleSearch} variant="link  me-2 p-0">
          <MdSearch style={{ width: '32px', height: '32px' }} />
        </Button>
        <CloseButton onClick={handleClearSearch} />
      </Form.Label>
    </Form>
  );
};

export default TodosSearch;
