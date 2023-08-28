import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import bg from '../../image/bg.png';

export default function Home() {
  const { isLoggedIn } = useAuth();

  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <Helmet>
        <title>{t('helmet_title_home_page')}</title>
      </Helmet>
      <div
        style={{
          // minHeight: '100vh',
          height: '80vh',
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
        className="d-flex flex-column  mt-5 pt-5"
      >
        <h1 className="mb-2 mx-auto">{t('title_home_page')}</h1>
        {isLoggedIn ? (
          <p className="mb-2 mx-auto">
            {t('home_page_text_left')}{' '}
            <Link to="/todos">{t('header_todos')} </Link>{' '}
            {t('home_page_text_right')}
          </p>
        ) : (
          <p className="mb-2 mx-auto"> {t('home_page_text')}</p>
        )}
      </div>
    </HelmetProvider>
  );
}
