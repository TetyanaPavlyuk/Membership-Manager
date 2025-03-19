import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import ukTranslation from "./locales/uk.json";

i18next.use(initReactI18next).init({
  lng: "en",
  debug: true,
  resources: {
    en: {
      translation: enTranslation,
    },
    uk: {
      translation: ukTranslation,
    },
  },
});
