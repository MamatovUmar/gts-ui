import { IService } from "@/types";

export const services: IService[] = [
  {
    id: 1,
    label: {
      ru: "Перелеты",
      en: "Flights",
      uz: "Parvozlar"
    },
    icon: 'icon-travelOutline-plane',
    value: 'flights',
    env: ['development', 'production', 'local']
  },
  {
    id: 3,
    label: {
      ru: "Отели",
      en: "Hotels",
      uz: "Mehmonxonalar"
    },
    icon: 'icon-travelOutline-hotel',
    value: 'hotels',
    env: ['development', 'local']
  },
  {
    id: 4,
    label: {
      ru: "Ж/Д",
      en: "Train",
      uz: "Temir yo'l"
    },
    icon: 'icon-travelOutline-traine1',
    value: 'railway',
    env: ['development', 'local', 'production']
  },
  {
    id: 5,
    label: {
      ru: "Трансферы",
      en: "Transfers",
      uz: "Transferlar"
    },
    icon: 'icon-travelOutline-transfer',
    value: 'transfers',
    env: ['development', 'local', 'production']
  },
  {
    id: 2,
    label: {
      ru: "Туры",
      en: "Tours",
      uz: "Sayohatlar"
    },
    icon: 'icon-Outline-tropical',
    value: 'tours',
    env: ['development', 'local']
  },
  {
    id: 6,
    label: {
      ru: "Страхование",
      en: "Insurance",
      uz: "Sug‘urta"
    },
    icon: 'icon-travelOutline-memo',
    value: 'insurance',
    env: ['development', 'production', 'local']
  },
  {
    id: 8,
    label: {
      ru: "Экскурсия",
      en: "Excursion",
      uz: "Ekskursiya"
    },
    icon: 'icon-travelOutline-routing',
    value: 'excursions',
    env: ['development', 'local']
  },
  {
    id: 7,
    label: {
      ru: "e-sim",
      en: "e-sim",
      uz: "e-sim"
    },
    icon: 'icon-travelOutline-simcard',
    value: 'esim',
    env: ['development', 'local', 'production']
  },
  {
    id: 9,
    label: {
      ru: "Корабли",
      en: "Cruise",
      uz: "Korabllar"
    },
    icon: 'icon-Outline-ship',
    value: 'cruise',
    env: ['development', 'local']
  }
]
