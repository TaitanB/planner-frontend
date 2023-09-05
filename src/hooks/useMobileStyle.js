import { useState, useEffect } from 'react';

function useMobileStyle() {
  const [isMobileStyle, setMobileStyle] = useState(false);

  useEffect(() => {
    const resizeScreen = () => {
      setMobileStyle(window.innerWidth <= 576);
    };

    resizeScreen();
    window.addEventListener('resize', resizeScreen);

    return () => {
      window.removeEventListener('resize', resizeScreen);
    };
  }, []);

  return isMobileStyle;
}

export default useMobileStyle;
