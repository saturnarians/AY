// src/reportWebVitals.js
// import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
import * as webVitals from 'web-vitals';

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
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
