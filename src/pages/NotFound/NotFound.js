import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <Helmet>
        <title>{t('helmet_not_found_page')}</title>
      </Helmet>
      <p className=" mt-5 pt-5">
        {t('not_found_page_text')} <Link to="/">{t('header_home')}</Link>!
      </p>
    </HelmetProvider>
  );
};

export default NotFound;
