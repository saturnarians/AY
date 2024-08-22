import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import English from "./Translation/English.json";
import French from "./Translation/French.json";
import Chinese from "./Translation/Chinese.json";
import German from "./Translation/German.json";
import Japanese from "./Translation/Japanese.json";
import Korean from "./Translation/Korean.json";
import Spanish from "./Translation/Spanish.json";
const resources = {
    en: {
        translation: English,
    },
    fr: {
        translation: French,
    },
    zh: {
        translation: Chinese,
    },
    de: {
        translation: German,
    },
    ja: {
        translation: Japanese,
    },
    ko: {
        translation: Korean,
    },
    es: {
        translation: Spanish,
    }
}

i18next.use(initReactI18next)
.init({
  resources,
  lng:"en", //default language
});

export default i18next;
