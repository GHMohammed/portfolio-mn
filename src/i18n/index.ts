import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation files
import enTranslation from "./locales/en/translation.json";
import arTranslation from "./locales/ar/translation.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ar", // default language
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
