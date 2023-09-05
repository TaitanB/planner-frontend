import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { logIn } from 'redux/auth/authOperations';
import PasswordToggle from '../../utils/PasswordToggle';

export const LoginForm = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} className="mx-auto">
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
        <div className="input-group">
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={password}
            placeholder={t('placeholder_password')}
            onChange={e => setPassword(e.target.value)}
          />
          <PasswordToggle
            showPassword={showPassword}
            togglePassword={handleTogglePassword}
          />
        </div>
      </Form.Group>
      <Button type="submit" className="m-2" variant="primary">
        {t('login')}
      </Button>
    </Form>
  );
};
