import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import enJSON from '../assets/locales/en/translation.json';
import arJSON from '../assets/locales/ar/translation.json';



i18next.use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(Backend)
    .init(
        {
    supportedLngs: ['en','ar'],
    fallbackLng: 'en', // default language
    debug: true,
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
        escapeValue: false // react already safes from xss
    },
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
    },
    detection: {
        order: ['localStorage', 'htmlTag', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
        cashes: ['localStorage']
    },
    // backend: {
    //     backends: [
    //         LocalStorageBackend,  // primary
    //         HttpApi
    //     ],
    //     backendOptions: [{
    //         projectId: 'ProjectId'
    //     },
    //     {
    //         loadPath: '/locales/{{lng}}/translation.json' // http api load path for my own fallback
    //     }]
    // },
    // react : {
    //     useSuspense:false
    // }

});

export default i18next;
