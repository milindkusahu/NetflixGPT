import { useEffect, useState } from 'react';

const useFontLoader = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      const font = new FontFaceObserver('Material Symbols Outlined');
      try {
        await font.load('test');
        document.body.classList.remove('no-icon');
        setFontLoaded(true);
      } catch (error) {
        setFontLoaded(false);
      }
    };

    // Execute the code when the document is fully loaded
    if (document.readyState === 'complete') {
      loadFont();
    } else {
      window.addEventListener('load', loadFont);
    }

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('load', loadFont);
    };
  }, []);

  return { fontLoaded };
};

export default useFontLoader;

