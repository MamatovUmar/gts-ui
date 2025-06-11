import { IService } from "@/types";

export const services: IService[] = [
  {
    label: {
      ru: "Перелеты",
      en: "Flights",
      uz: "Parvozlar"
    },
    icon: 'icon-travelOutline-plane',
    value: 'flights',
    env: ['development', 'production']
  },
  {
    label: {
      ru: "Отели",
      en: "Hotels",
      uz: "Mehmonxonalar"
    },
    icon: 'icon-travelOutline-hotel',
    value: 'hotels',
    env: ['development']
  },
  {
    label: {
      ru: "Ж/Д",
      en: "Train",
      uz: "Temir yo‘l"
    },
    icon: 'icon-travelOutline-traine1',
    value: 'railway',
    env: ['development']
  },
  {
    label: {
      ru: "Трансферы",
      en: "Transfers",
      uz: "Transferlar"
    },
    icon: 'icon-travelOutline-transfer',
    value: 'transfers',
    env: ['development']
  },
  {
    label: {
      ru: "Туры",
      en: "Tours",
      uz: "Sayohatlar"
    },
    icon: 'icon-Outline-tropical',
    value: 'tours',
    env: ['development']
  },
  {
    label: {
      ru: "Страхование",
      en: "Insurance",
      uz: "Sug‘urta"
    },
    icon: 'icon-travelOutline-memo',
    value: 'insurance',
    env: ['development', 'production']
  },
  {
    label: {
      ru: "Экскурсия",
      en: "Excursion",
      uz: "Ekskursiya"
    },
    icon: 'icon-travelOutline-routing',
    value: 'excursions',
    env: ['development']
  },
  {
    label: {
      ru: "e-sim",
      en: "e-sim",
      uz: "e-sim"
    },
    icon: 'icon-travelOutline-simcard',
    value: 'esim',
    env: ['development']
  }
]
