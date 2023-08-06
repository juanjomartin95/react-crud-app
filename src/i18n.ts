import i18next from 'i18next'
import en from '@/locales/en.json'
import {initReactI18next} from "react-i18next";

const resources = {
  en: { translation: en },
}

i18next.use(initReactI18next).init({
  lng: 'en',
  debug: false,
  resources,
})

export default i18next
