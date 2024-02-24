import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Statistics = () => {
  const { t } = useTranslation();

  return (
    <div className=" mt-5 pt-5">
      <HelmetProvider>
        <Helmet>
          <title>{t('header_statistics')}</title>
        </Helmet>
        <h1>{t('header_statistics')}</h1>
      </HelmetProvider>
    </div>
  );
};

export default Statistics;
