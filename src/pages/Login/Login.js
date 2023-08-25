import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useTranslation } from 'react-i18next';

export default function Login() {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <Helmet>
        <title>{t('login')}</title>
      </Helmet>
      <div className="d-flex flex-column  mt-5 pt-5">
        <h2 className="text-uppercase mb-2 mx-auto">{t('login')}</h2>
        <LoginForm />
      </div>
    </HelmetProvider>
  );
}
