import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './es';
import en from './en';
import pt from './pt';

const resources = {
    en: {
        translation: en,
    },
    es: {
        translation: es,
    },
    pt: {
        translation: pt,
    },
};

const defaultLang = localStorage.getItem('lang') || 'es';

i18n.use(initReactI18next).init({
    resources,
    lang: defaultLang,
    interpolation: {
        escapeValue: false
    }
});

export const updateLang = async (language) => {
    await i18n.changeLanguage(language);
    localStorage.setItem('lang', language);
}

const defaultLangSetter = () => {
    updateLang(defaultLang);
}

defaultLangSetter();

export default i18n;