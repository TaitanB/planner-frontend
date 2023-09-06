import React from 'react';

import github from '../../image/github.png';
import linkedin from '../../image/linkedin.png';
import telegram from '../../image/telegram.png';
import mail from '../../image/mail.png';

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
            className="link"
          >
            <img src={github} alt="github" width={32} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tetiana-bartoshyk/"
            target="_blank"
            rel="noreferrer noopener"
            className="link"
          >
            <img src={linkedin} alt="linkedin" width={32} />
          </a>
        </li>
        <li>
          <a
            href="https://t.me/TaitanB"
            target="_blank"
            rel="noreferrer noopener"
            className="link"
          >
            <img src={telegram} alt="telegram" width={32} />
          </a>
        </li>
        <li>
          <a
            href="mailto:taitanb@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            className="link"
          >
            <img src={mail} alt="mail" width={32} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
