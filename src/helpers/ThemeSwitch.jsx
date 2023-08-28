import React, { useState, useEffect } from 'react';

import { DarkModeSwitch } from 'react-toggle-dark-mode';

export const ThemeSwitch = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const htmlElement = document.querySelector('html');
      htmlElement.setAttribute('data-bs-theme', savedTheme);
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = checked => {
    const htmlElement = document.querySelector('html');
    const currentTheme = htmlElement.getAttribute('data-bs-theme');

    if (currentTheme === 'light') {
      htmlElement.setAttribute('data-bs-theme', 'dark');
    } else {
      htmlElement.setAttribute('data-bs-theme', 'light');
    }

    setDarkMode(checked);

    localStorage.setItem('theme', checked ? 'dark' : 'light');
  };

  return (
    <DarkModeSwitch
      moonColor="#FFD700"
      sunColor="#FFD700"
      checked={isDarkMode}
      onChange={toggleTheme}
    />
  );
};
