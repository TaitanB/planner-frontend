import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { useAuth } from '../../hooks/useAuth';

export const Navigation = ({ showMenu, setShowMenu }) => {
  const { isLoggedIn } = useAuth();

  const { t } = useTranslation();

  const handleClick = event => {
    event.target.blur();
    setShowMenu(false);
  };

  return (
    <div
      className={`d-flex ${
        showMenu ? 'mx-auto my-5 flex-column gap-5' : 'me-auto gap-3'
      }`}
    >
      <NavLink
        className="nav-link d-flex align-items-center justify-content-center"
        to="/"
        onClick={handleClick}
      >
        {t('header_home')}
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink
            className="nav-link d-flex align-items-center justify-content-center"
            to="/profile"
            onClick={handleClick}
          >
            {t('header_profile')}
          </NavLink>
          <NavLink
            className="nav-link d-flex align-items-center justify-content-center"
            to="/statistics"
            onClick={handleClick}
          >
            {t('header_statistics')}
          </NavLink>
          <NavLink
            className="nav-link d-flex align-items-center justify-content-center"
            to="/todos"
            onClick={handleClick}
          >
            {t('header_todos')}
          </NavLink>
        </>
      )}
    </div>
  );
};
