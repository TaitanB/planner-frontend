import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <Helmet>
        <title>{t('register')}</title>
      </Helmet>
      <div className="d-flex flex-column  mt-5 pt-5">
        <h2 className="text-uppercase mb-2 mx-auto">{t('register')}</h2>
        <RegisterForm />
      </div>
    </HelmetProvider>
  );
}
