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
    search: 'Qidirish',
    payment: {
      title: 'To\'lov turini tanlang',
      balance: 'Shartnoma balansi',
      supplier: 'Поставщик',
      agree: 'To\'lovni tasdiqlashdan avval o\'qib chiqing',
      public_offer: 'offertani',
      cancel: 'Yopish',
      confirm: 'Tasdiqlash',
      deposit: 'Depozit',
      card: 'Kredit karta',
      wallet: 'Hamyon',
    }
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
    empty_text: 'Нет совпадений',
    search: 'Поиск',
    payment: {
      title: 'Выберите способ оплаты',
      balance: 'Баланс договора',
      supplier: 'Поставщик',
      agree: 'Перед подтверждением оплаты, предварительно ознакомьтесь с',
      public_offer: 'Публичной оффертой',
      cancel: 'Отменить',
      confirm: 'Подтвердить',
      deposit: 'Депозит',
      card: 'Кредитная карта',
      wallet: 'Кошелек',
    }
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
    empty_text: 'No matches',
    search: 'Search',
    payment: {
      title: 'Select payment method',
      balance: 'Contract balance',
      supplier: 'Supplier',
      agree: 'Before confirming the payment, please familiarize yourself with',
      public_offer: 'Public offer',
      cancel: 'Cancel',
      confirm: 'Confirm',
      deposit: 'Deposit',
      card: 'Credit card',
      wallet: 'Wallet',
    }
  },
}
