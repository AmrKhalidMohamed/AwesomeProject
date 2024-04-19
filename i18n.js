import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: require('./locales/en.json'),
      },
      ar: {
        translation: require('./locales/ar.json'),
      },
    },
//     backend: {
//       loadPath: 'https://your-api.com/locales/{{lng}}/{{ns}}.json', // URL to your translations
//     },
  });

export default i18n;
