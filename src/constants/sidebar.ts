import {ISidebarItem} from "@/types/ui";

export default [
  {
    path: '/',
    icon: 'icon-Outline-Home',
    activeIcon: 'icon-Bold-Home',
    label: 'Дашборд',
    code: 'search',
    internal: true,
    pages: ['home']
  },
  {
    path: '/search',
    icon: 'icon-Outline-Search',
    activeIcon: 'icon-Bold-Search',
    label: 'Поиск',
    code: 'search',
    pages: ['search']
  },
  {
    path: '/charter',
    icon: 'icon-travelOutline-plane',
    activeIcon: 'icon-travelOutline-plane',
    label: 'Чартер',
    code: 'provider-charter-list',
    pages: ['charter']
  },
  {
    path: '/orders',
    icon: 'icon-Outline-Buy',
    activeIcon: 'icon-Bold-Buy',
    label: 'Заказы',
    code: 'list-own-order',
    pages: ['orders']
  },
  {
    path: '/agreements',
    icon: 'icon-Outline-Document',
    activeIcon: 'icon-Bold-Document',
    label: 'Договоры',
    code: 'agreement-list',
    pages: ['agreements']
  },
  {
    path: '/community',
    icon: 'icon-Outline-Chat',
    activeIcon: 'icon-Bold-Chat',
    label: 'Сообщество',
    code: 'group-community',
    pages: ['community']
  },
  {
    path: '/users',
    icon: 'icon-Outline-2User',
    activeIcon: 'icon-Bold-2User',
    label: 'Пользователи',
    code: 'list-staff',
    pages: ['users']
  },
  {
    path: '/suppliers',
    icon: 'icon-Outline-Ticket',
    activeIcon: 'icon-Bold-Ticket',
    label: 'Поставщики',
    code: 'suppliers-list',
    pages: ['suppliers']
  },
  {
    path: '/reports',
    icon: 'icon-Outline-Activity',
    activeIcon: 'icon-Bold-Activity',
    label: 'Отчеты',
    code: 'customize-list',
    pages: ['reports'],
    children: [
      {
        path: '/reports/basic-indicators',
        label: 'Основные показатели',
        code: 'customize-list',
        pages: ['reports', 'reports/basic-indicators']
      }
    ]
  },
  {
    path: '/settings',
    icon: 'icon-Outline-Setting',
    activeIcon: 'icon-Bold-Setting',
    label: 'Настройки',
    pages: ['settings'],
    children: [
      {
        path: '/settings/exchange-rates',
        label: 'Курсы валют',
        code: 'get-exchange-rates',
        pages: ['settings/exchange-rates']
      },
      {
        path: '',
        label: 'Правила',
        pages: ['settings'],
        accordion: true,
        children: [
          {
            path: '/settings/rule-list',
            label: 'Список правил',
            code: 'rules-user-collection',
            pages: ['settings/rule-list']
          },
          {
            path: '/settings/rules-history',
            label: 'История использования',
            code: 'rules-get-history-list',
            pages: ['settings/rules-history']
          }
        ]
      },
      {
        path: '/settings/route-receipt',
        label: 'Маршрутна',
        code: 'reciept-pattern-list',
        pages: ['settings/route-receipt']
      },
      {
        path: '/settings/personalization',
        label: 'Персонализация',
        code: 'home',
        pages: ['settings/personalization']
      }
    ]
  }
] as ISidebarItem[]
