import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import tranKo from './locales/ko';
import tranEn from './locales/en';

const resources = {
    ko: tranKo,
    en: tranEn,
}

i18n
    .use(initReactI18next) // pass the i18n instance to react-i18next.
    .init({
        resources,
        lng: 'ko', // 현재 선택된 언어
        fallbackLng: 'ko', // 선택된 언어가 해당 리소스에 없을 경우 사용할 기본 폴백 언어
        debug: true,
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });


export default i18n;