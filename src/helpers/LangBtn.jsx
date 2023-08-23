import React, { useContext } from 'react';
import { LanguageContext } from 'utils/LanguageContext';
import { ButtonGroup, Button } from 'react-bootstrap';

const LangBtn = () => {
  const { currentLanguage, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = lang => {
    changeLanguage(lang);
  };

  return (
    <ButtonGroup className="p-1 btn-group" role="group">
      <Button
        type="button"
        onClick={() => handleLanguageChange('ua')}
        className={`py-1 px-2 border rounded-start-pill ${
          currentLanguage === 'ua' ? 'active' : ''
        }`}
      >
        UA
      </Button>
      <Button
        type="button"
        onClick={() => handleLanguageChange('en')}
        className={`py-1 px-2 border rounded-end-circle ${
          currentLanguage === 'en' ? 'active' : ''
        }`}
      >
        EN
      </Button>
    </ButtonGroup>
  );
};

export default LangBtn;
