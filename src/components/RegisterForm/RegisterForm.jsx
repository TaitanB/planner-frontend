import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Form, Button, InputGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import * as yup from 'yup';
import { register } from 'redux/auth/authOperations';
import PasswordToggle from '../../utils/PasswordToggle';

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const schemaRegister = yup.object().shape({
    name: yup
      .string()
      .required("Ім'я є обов'язковим")
      .matches(
        /^[a-zA-Zа-яА-ЯІіЇїЄєҐґ\s'-]+$/,
        "Ім'я може містити літери латиниці, кирилиці, пробіли, апострофи та тире"
      )
      .min(2, "Ім'я повинно бути не менше 2 символів")
      .max(26, "Ім'я повинно бути не більше 26 символів"),
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
    const isValid = await schemaRegister.isValid(values);

    if (!isValid) {
      return;
    }

    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );

    resetForm();
  };

  return (
    <Formik
      validationSchema={schemaRegister}
      onSubmit={handleSubmit}
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit} className="mx-auto">
          <Form.Group controlId="formRegisterName" className=" mb-4">
            <Form.Label>{t('name')}:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder={t('placeholder_name')}
              value={values.name}
              onChange={handleChange}
              isValid={touched.name && !errors.name}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formRegisterEmail" className="mb-4">
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
            {t('register')}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
