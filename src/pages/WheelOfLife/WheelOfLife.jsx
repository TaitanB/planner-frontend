import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const WheelOfLife = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>{t('header_wheel_of_life')}</title>
        </Helmet>
        <h1>{t('header_wheel_of_life')}</h1>
      </HelmetProvider>
    </div>
  );
};

export default WheelOfLife;
