import { useDispatch } from 'react-redux';

import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { logOut } from 'redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';

export const UserMenu = ({ showMenu, setShowMenu }) => {
  const { user } = useAuth();

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
    setShowMenu(false);
  };

  return (
    <div
      className={
        showMenu ? 'd-flex flex-column gap-5' : 'd-flex flex-wrap gap-3'
      }
    >
      <div className="d-flex mx-auto align-items-center">
        <div style={{ marginRight: '10px' }}>
          <img src={user.avatarURL} alt="avatar" width={40} height={40} />
        </div>
        <p style={{ margin: '0' }}>
          {t('welcome')}, <b>{user.name}!</b>
        </p>
      </div>
      <Button
        className="mx-auto"
        type="button "
        variant="primary"
        onClick={handleClick}
      >
        {t('logout')}
      </Button>
    </div>
  );
};
