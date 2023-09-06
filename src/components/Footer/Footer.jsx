import React from 'react';

const Footer = () => {
  return (
    <footer className="p-3 gap-3 bg-dark-subtle d-flex mt-auto align-items-center footer flex-wrap">
      <p className="me-auto">
        <small className="text-muted">&copy;2023</small> by Tetiana Bartoshyk
      </p>
      <ul className="d-flex gap-3 align-items-center">
        <li>
          <a
            href="https://github.com/TaitanB"
            target="_blank"
            rel="noreferrer noopener"
            className="link link-opacity-50-hover"
          >
            <svg className="icon" width={32} height={32}>
              <use href="./symbol-defs.svg#icon-github"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tetiana-bartoshyk/"
            target="_blank"
            rel="noreferrer noopener"
            className="link link-opacity-50-hover"
          >
            <svg className="icon" width={35} height={35}>
              <use href="./symbol-defs.svg#icon-linkedin"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://t.me/TaitanB"
            target="_blank"
            rel="noreferrer noopener"
            className="link link-opacity-50-hover"
          >
            <svg className="icon" width={32} height={32}>
              <use href="./symbol-defs.svg#icon-telegram"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="mailto:taitanb@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            className="link link-opacity-50-hover"
          >
            <svg className="icon" width={32} height={32}>
              <use href="./symbol-defs.svg#icon-mail"></use>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
