import React, {
    createContext,
    useContext,
  } from "react";
  import { useTranslation } from "react-i18next";
  
  
  export const LanguageContext = createContext(undefined);
  
  export const LanguageContextProvider = ({ children }) => {
    const languages = {
      en: { nativeName: "English" },
      fr: { nativeName: "French" },
      zh: {nativeName: "Chinese"},
    de: { nativeName: "German"},
    ja: {nativeName: "Japanese"},
    ko: {nativeName: "Korean"},
    es: {nativeName: "Spanish"}
      
    };
    const { t, i18n } = useTranslation();
  
    const onClickLanguageChange = (e) => {
      const language = e.target.value;
      i18n.changeLanguage(language); //change the language
    };
  
    return (
      <LanguageContext.Provider
        value={{ t, i18n, onClickLanguageChange, languages }}
      >
        {children}
      </LanguageContext.Provider>
    );
  };
  
  export const useLanguageContext = () => useContext(LanguageContext);