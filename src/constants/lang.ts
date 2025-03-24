import { LocaleTypes } from "@/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const lang: Record<LocaleTypes, any> = {
  uz: {
    sidebar: {
      title: 'Menyu',
      logout: 'Chiqish',
    },
    pagination: 'Ko\'rsatish',
    empty_options: 'Mavjud variantlar yo\'q',
  },
  ru: {
    sidebar: {
      title: 'Меню',
      logout: 'Выйти',
    },
    pagination: 'Показать по',
    empty_options: 'Нет доступных вариантов',
  },
  en: {
    sidebar: {
      title: 'Menu',
      logout: 'Logout',
    },
    pagination: 'Show by',
    empty_options: 'No available options',
  },
}
