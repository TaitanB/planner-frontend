import React from 'react';

import { Button } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = ({ isAccordionOpen }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      variant="outline-primary"
      className={`position-absolute bottom-0 end-0 scroll-to-top-button me-3 ${
        isAccordionOpen ? 'visible' : 'invisible'
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="scroll-to-top-icon" />
    </Button>
  );
};

export default ScrollToTopButton;
