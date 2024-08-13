import React, { useEffect } from 'react';

const TawkToWidget = () => {
  useEffect(() => {
    // Replace 'YOUR_TAWK_TO_PROPERTY_ID' and 'YOUR_TAWK_TO_WIDGET_ID' with your actual IDs
    const tawkScript = document.createElement('script');
    tawkScript.async = true;
    tawkScript.src = `https://embed.tawk.to/66bb40d80cca4f8a7a755c24/1i55nakd1`;
    tawkScript.charset = 'UTF-8';
    tawkScript.setAttribute('crossorigin', '*');
    document.body.appendChild(tawkScript);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(tawkScript);
    };
  }, []);

  return null; // This component does not render anything itself
};

export default TawkToWidget;
