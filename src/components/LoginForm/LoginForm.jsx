import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Form, Button, InputGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import * as yup from 'yup';
import { logIn } from 'redux/auth/authOperations';
import PasswordToggle from '../../utils/PasswordToggle';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const schemaLogin = yup.object().shape({
    email: yup
      .string()
      .required("Email є обов'язковим")
      .email('Введіть коректний email'),
    password: yup
      .string()
      .required("Пароль є обов'язковим")
      .min(8, 'Пароль повинен бути не менше 8 символів')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        'Пароль повинен містити принаймні одну цифру, одну маленьку і одну велику літеру'
      ),
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    const isValid = await schemaLogin.isValid(values);

    if (!isValid) {
      return;
    }

    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );

    resetForm();
  };

  return (
    <Formik
      validationSchema={schemaLogin}
      onSubmit={handleSubmit}
      initialValues={{
        email: '',
        password: '',
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit} className="mx-auto">
          <Form.Group controlId="formLoginEmail" className="mb-4">
            <Form.Label>{t('email')}:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder={t('placeholder_email')}
              value={values.email}
              onChange={handleChange}
              isValid={touched.email && !errors.email}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
            <Form.Text className="text-muted">{t('form_text')}</Form.Text>
          </Form.Group>
          <Form.Group controlId="formLoginPassword" className="mb-4">
            <Form.Label>{t('password')}:</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={values.password}
                placeholder={t('placeholder_password')}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
                isInvalid={!!errors.password}
              />
              <PasswordToggle
                showPassword={showPassword}
                togglePassword={handleTogglePassword}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Button type="submit" className="m-2" variant="primary">
            {t('login')}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
