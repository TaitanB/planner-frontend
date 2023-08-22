import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { ThemeSwitch } from '../../helpers/ThemeSwitch';
import LangBtn from '../../helpers/LangBtn';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';

import logo from '../../image/logo192.png';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    const bodyElement = document.body;

    setShowMenu(!showMenu);

    if (!showMenu) {
      bodyElement.style.overflow = 'hidden';
    } else {
      bodyElement.style.overflow = 'auto';
    }
  };

  return (
    <header>
      <Navbar
        collapseOnSelect
        fixed="top"
        expanded={showMenu}
        expand="lg"
        className="p-3 gap-3 bg-dark-subtle"
        onToggle={handleMenuToggle}
      >
        <Navbar.Brand className="me-0">
          <img src={logo} alt="Wheel Of Life" style={{ width: '36px' }} />
        </Navbar.Brand>
        <LangBtn />
        <ThemeSwitch />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={showMenu ? 'vh-100 d-flex gap-5 flex-column' : ''}
        >
          <Nav className="w-100">
            <Navigation showMenu={showMenu} setShowMenu={setShowMenu} />
            {isLoggedIn ? (
              <UserMenu showMenu={showMenu} setShowMenu={setShowMenu} />
            ) : (
              <AuthNav showMenu={showMenu} setShowMenu={setShowMenu} />
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default AppBar;
