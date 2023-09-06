import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Accordion, Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

import { fetchAddTodo } from '../../redux/todos/operations';
import PeriodsDate from '../PeriodsDate/PeriodsDate';

export default function AddTodosForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [plannedDate, setPlannedDate] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [activeAccordionKey, setActiveAccordionKey] = useState(null);

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'title':
        setTitle(value);
        break;

      case 'description':
        setDescription(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(fetchAddTodo({ title, description, plannedDate }));
    toast.success(`${t('todo_added')}`);
    reset();
  };

  const reset = () => {
    setTitle('');
    setDescription('');
    setPlannedDate('');
    setSelectedPeriod('');
  };

  const handleCancelClick = () => {
    reset();
    if (activeAccordionKey === '0') {
      setActiveAccordionKey(null);
    }
  };

  const handleAccordionSelect = key => {
    setActiveAccordionKey(key);
  };

  return (
    <Accordion
      activeKey={activeAccordionKey}
      onSelect={handleAccordionSelect}
      className="mb-5"
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h3 className="mb-0 ms-auto ">{t('form_add_todo_title')}</h3>
        </Accordion.Header>
        <Accordion.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label visuallyHidden>{t('title_todo')}</Form.Label>
              <Form.Control
                type="text"
                name="title"
                required
                value={title}
                onChange={handleChange}
                placeholder={t('placeholder_title')}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label visuallyHidden>{t('description')}</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
                placeholder={t('placeholder_description')}
              />
            </Form.Group>
            <div key="inline-radio" className="d-flex flex-wrap mb-3">
              <h5 className="d-inline-block me-3 mb-3">
                {`${t('planned_date')}`}:
              </h5>
              <PeriodsDate
                plannedDate={plannedDate}
                setPlannedDate={setPlannedDate}
                selectedPeriod={selectedPeriod}
                setSelectedPeriod={setSelectedPeriod}
              />
            </div>
            <Button
              className="me-3"
              variant="primary"
              type="submit"
              disabled={!title || !description || !selectedPeriod}
            >
              {t('add_todo')}
            </Button>
            <Button variant="secondary" onClick={handleCancelClick}>
              {t('cancel')}
            </Button>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
