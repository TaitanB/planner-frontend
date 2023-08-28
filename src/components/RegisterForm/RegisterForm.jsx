import { useDispatch } from 'react-redux';

import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { register } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} className="mx-auto">
      <Form.Group controlId="formBasicEmail" className=" mb-4">
        <Form.Label>{t('name')}:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder={t('placeholder_name')}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail" className="mb-4">
        <Form.Label>{t('email')}:</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder={t('placeholder_email')}
        />
        <Form.Text className="text-muted">{t('form_text')}</Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword" className="mb-4">
        <Form.Label>{t('password')}:</Form.Label>
        <Form.Control
          type="Password"
          name="password"
          placeholder={t('placeholder_password')}
        />
      </Form.Group>
      <Button type="submit" className="m-2" variant="primary">
        {t('register')}
      </Button>
    </Form>
  );
};
