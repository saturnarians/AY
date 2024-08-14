// src/reportWebVitals.js
import * as webVitals from 'web-vitals';

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    webVitals.getCLS(onPerfEntry);
    webVitals.getFID(onPerfEntry);
    webVitals.getFCP(onPerfEntry);
    webVitals.getLCP(onPerfEntry);
    webVitals.getTTFB(onPerfEntry);
  }
};

export default reportWebVitals;




// reportWebVitals((metric) => {
//   const body = JSON.stringify(metric);
//   const url = 'https://your-analytics-endpoint.example.com';

//   // Use `navigator.sendBeacon()` if available, falling back to `fetch`.
//   if (navigator.sendBeacon) {
//     navigator.sendBeacon(url, body);
//   } else {
//     fetch(url, { body, method: 'POST', keepalive: true });
//   }
// });
