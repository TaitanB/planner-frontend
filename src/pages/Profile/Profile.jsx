import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>{t('helmet_profile')}</title>
        </Helmet>
        <h1>{t('header_profile')}</h1>
      </HelmetProvider>
    </div>
  );
};

export default Profile;
