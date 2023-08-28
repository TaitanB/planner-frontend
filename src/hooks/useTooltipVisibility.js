import { useState, useEffect } from 'react';

function useTooltipVisibility() {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    const resizeScreen = () => {
      setTooltipVisible(window.innerWidth <= 576);
    };

    resizeScreen();
    window.addEventListener('resize', resizeScreen);

    return () => {
      window.removeEventListener('resize', resizeScreen);
    };
  }, []);

  return isTooltipVisible;
}

export default useTooltipVisibility;
