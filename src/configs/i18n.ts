import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      msg: "hello world",
      firstName: "first name",
      lastName: "last name",
      fistNameLabel: "@:firstName",
      lastNameLabel: "@:lastName",
      submit: "submit",
    },
  },
  kr: {
    translation: {
      msg: "안녕하세요",
      firstName: "실제 이름",
      lastName: "성",
      fistNameLabel: "@:firstName",
      lastNameLabel: "@:lastName",
      submit: "제출",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "kr",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
