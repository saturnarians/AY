import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './ServiceWorker';
import './i18n'; // Import i18n configuration
import { LanguageContextProvider } from "./context/LanguageContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageContextProvider>
    <Fragment>
   {/* <AuthProvider> */}
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
    {/* </AuthProvider> */}
    </Fragment>
    </LanguageContextProvider>
  </React.StrictMode>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
reportWebVitals(console.log);