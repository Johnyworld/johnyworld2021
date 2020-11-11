import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from "i18next-xhr-backend";

export const languages = [ 'en', 'ko', 'ja' ] as const;
export type Languages = typeof languages[number];

const userLanguage = window.navigator.language;

i18n.use(backend).use(initReactI18next).init({
  lng: localStorage.getItem('language') || userLanguage || 'en',
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: false
  },
  backend: {
    loadPath: '/locales/{{lng}}.json',
  }
})

export default i18n;