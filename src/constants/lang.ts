import { LocaleTypes } from "@/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const lang: Record<LocaleTypes, any> = {
  uz: {
    sidebar: {
      title: 'Menyu',
      logout: 'Chiqish',
      back: "Ortga qaytish"
    },
    pagination: 'Ko\'rsatish',
    empty_options: 'Mavjud variantlar yo\'q',
    currency: 'Valyuta',
    language: 'Til',
    empty_text: 'Mavjud variantlar yo\'q',
  },
  ru: {
    sidebar: {
      title: 'Меню',
      logout: 'Выйти',
      back: "Вернуться к проекту"
    },
    pagination: 'Показать по',
    empty_options: 'Нет доступных вариантов',
    currency: 'Валюта',
    language: 'Язык',
    empty_text: 'Нет совпадений'
  },
  en: {
    sidebar: {
      title: 'Menu',
      logout: 'Logout',
      back: "Back to project"
    },
    pagination: 'Show by',
    empty_options: 'No available options',
    currency: 'Currency',
    language: 'Language',
    empty_text: 'No matches'
  },
}
