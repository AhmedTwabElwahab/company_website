import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import  enJSON from '../../src/assets/locales/en/trans.json';
import  arJSON from '../../src/assets/locales/ar/trans.json';

i18next
    .use(Backend)
    .use(LanguageDetector)
    .init({
    debug: true,
    resources: {
        en: {
            translation: {
                ...enJSON
            }
        },
        ar: {
            translation: {
                ...arJSON
            }
        },
    }
});
export default i18next;
