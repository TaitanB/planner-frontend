import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const AuthNav = ({ showMenu, setShowMenu }) => {
  const { t } = useTranslation();

  const handleClick = event => {
    event.target.blur();
    setShowMenu(false);
  };

  return (
    <>
      <Button
        as={NavLink}
        variant="primary"
        to="/register"
        className={`${showMenu ? 'mb-5 mx-auto' : 'me-3'}`}
        onClick={handleClick}
      >
        {t('register')}
      </Button>
      <Button
        as={NavLink}
        variant="primary"
        to="/login"
        className={`${showMenu ? 'mx-auto' : ''}`}
        onClick={handleClick}
      >
        {t('login')}
      </Button>
    </>
  );
};
