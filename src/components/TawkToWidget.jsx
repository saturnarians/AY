import React, { useEffect } from 'react';

const TawkToWidget = () => {
  useEffect(() => {
    // Create and append the Tawk.to script
    const tawkScript = document.createElement('script');
    tawkScript.async = true;
    tawkScript.src = `https://embed.tawk.to/66bb40d80cca4f8a7a755c24/1i55nakd1`; // Your Tawk.to widget URL
    tawkScript.charset = 'UTF-8';
    tawkScript.setAttribute('crossorigin', '*');
    document.body.appendChild(tawkScript);

        // Setup the Tawk.to API after the script loads
    tawkScript.onload = () => {
      if (window.Tawk_API) {
        window.Tawk_API.onLoad = () => {
          // Configure pre-chat form fields
          window.Tawk_API.setAttributes({
            name: { required: true, visible: true },
            email: { required: true, visible: true }
          }, function(error){ 
            if (error) {
              console.error('Error setting attributes:', error);
            }
          });
        };
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.removeChild(tawkScript);
    };
  }, []);

  return null; // This component does not render anything itself
};

export default TawkToWidget;



// import React, { useEffect } from 'react';

// const TawkToWidget = () => {
//   useEffect(() => {
//     // Create and append the Tawk.to script
//     const tawkScript = document.createElement('script');
//     tawkScript.async = true;
//     tawkScript.src = `https://embed.tawk.to/66bb40d80cca4f8a7a755c24/1i55nakd1`;
//     tawkScript.charset = 'UTF-8';
//     tawkScript.setAttribute('crossorigin', '*');
//     document.body.appendChild(tawkScript);

//     // Setup the Tawk.to API after the script loads
//     tawkScript.onload = () => {
//       if (window.Tawk_API) {
//         window.Tawk_API.onLoad = () => {
//           // Configure pre-chat form fields
//           window.Tawk_API.setAttributes({
//             name: { required: true, visible: true },
//             email: { required: true, visible: true }
//           }, function(error){ 
//             if (error) {
//               console.error('Error setting attributes:', error);
//             }
//           });
//         };
//       }
//     };

//     // Cleanup on unmount
//     return () => {
//       document.body.removeChild(tawkScript);
//     };
//   }, []);

//   return null; // This component does not render anything itself

// };

// export default TawkToWidget;



