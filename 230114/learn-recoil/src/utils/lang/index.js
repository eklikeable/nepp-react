import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import langEn from './en.json';
import langKo from './ko.json';

const resources = {
  en: langEn,
  ko: langKo,
};

i18n.use(initReactI18next).init({
  resources: resources,
  lng: 'en',
});
