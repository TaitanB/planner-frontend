import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
export default function UpdateTodosForm({
  handleSubmit,
  descriptionUpdate,
  handleChange,
  description,
  reset,
}) {
  const { t } = useTranslation();

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          rows={3}
          type="text"
          name="description"
          value={descriptionUpdate}
          onChange={handleChange}
        />
      </Form.Group>
      <Button
        className="me-3"
        variant="primary"
        type="submit"
        disabled={descriptionUpdate === description}
      >
        {t('update_todo')}
      </Button>
      <Button variant="secondary" onClick={() => reset()}>
        {t('cancel')}
      </Button>
    </Form>
  );
}
