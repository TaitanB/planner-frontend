import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link, useLocation } from 'react-router-dom';

import { Nav, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { getTotalTodos } from '../../redux/todos/selectors';
import useTooltipVisibility from '../../hooks/useTooltipVisibility';

const TodosStatistics = () => {
  const totalTodos = useSelector(getTotalTodos);

  const location = useLocation();

  const { t } = useTranslation();

  const handleClick = event => {
    event.target.blur();
  };

  const isTooltipVisible = useTooltipVisibility();

  return (
    <Nav
      variant="tabs"
      defaultActiveKey="/todos"
      className="d-flex flex-nowrap gap-3 ms-auto nav-todos"
    >
      <Link
        className={`flex-shrink-1 nav-link position-relative ${
          location.pathname === '/todos' ? 'active' : ''
        }`}
        to="/todos"
        onClick={handleClick}
      >
        {isTooltipVisible ? (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{`${t('all_todos')}`}</Tooltip>}
          >
            <p className="w-100 col-2 text-truncate">{t('all_todos')}</p>
          </OverlayTrigger>
        ) : (
          <p className="w-100 col-2 text-truncate">{t('all_todos')}</p>
        )}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
          {totalTodos}
          <span className="visually-hidden">{t('all_todos')}</span>
        </span>
      </Link>
      <NavLink
        className="flex-shrink-1 nav-link position-relative"
        to="completed"
        onClick={handleClick}
      >
        {isTooltipVisible ? (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{`${t('completed')}`}</Tooltip>}
          >
            <p className="w-100 col-2 text-truncate">{t('completed')}</p>
          </OverlayTrigger>
        ) : (
          <p className="w-100 col-2 text-truncate">{t('completed')}</p>
        )}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
          0<span className="visually-hidden">{t('completed')}</span>
        </span>
      </NavLink>
      <NavLink
        className="flex-shrink-1 nav-link position-relative"
        to="overdue"
        onClick={handleClick}
      >
        {isTooltipVisible ? (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{`${t('is_overdue')}`}</Tooltip>}
          >
            <p className="w-100 col-2 text-truncate">{t('is_overdue')}</p>
          </OverlayTrigger>
        ) : (
          <p className="w-100 col-2 text-truncate">{t('is_overdue')}</p>
        )}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
          0<span className="visually-hidden">{t('is_overdue')}</span>
        </span>
      </NavLink>
      <NavLink
        className="flex-shrink-1 nav-link position-relative"
        to="archive"
        onClick={handleClick}
      >
        {isTooltipVisible ? (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{`${t('archive')}`}</Tooltip>}
          >
            <p className="w-100 col-2 text-truncate">{t('archive')}</p>
          </OverlayTrigger>
        ) : (
          <p className="w-100 col-2 text-truncate">{t('archive')}</p>
        )}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
          0<span className="visually-hidden">{t('archive')}</span>
        </span>
      </NavLink>
    </Nav>
  );
};

export default TodosStatistics;
