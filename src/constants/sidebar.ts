import { ISidebarItem } from "@/types/ui";

export default [
  {
    path: '/',
    icon: 'icon-Outline-Home',
    activeIcon: 'icon-Bold-Home',
    label: 'Дашборд',
    code: 'search',
    internal: true
  },
  {
    path: '/search',
    icon: 'icon-Outline-Search',
    activeIcon: 'icon-Bold-Search',
    label: 'Поиск',
    code: 'search'
  },
  {
    path: '/charter',
    icon: 'icon-travelOutline-plane',
    activeIcon: 'icon-travelOutline-plane',
    label: 'Чартер',
    code: 'provider-charter-list'
  },
  {
    path: '/orders',
    icon: 'icon-Outline-Buy',
    activeIcon: 'icon-Bold-Buy',
    label: 'Заказы',
    code: 'list-own-order'
  },
  {
    path: '/agreements',
    icon: 'icon-Outline-Document',
    activeIcon: 'icon-Bold-Document',
    label: 'Договоры',
    code: 'agreement-list'
  },
  {
    path: '/community',
    icon: 'icon-Outline-Chat',
    activeIcon: 'icon-Bold-Chat',
    label: 'Сообщество',
    code : 'group-community'
  },
  {
    path: '/users',
    icon: 'icon-Outline-2User',
    activeIcon: 'icon-Bold-2User',
    label: 'Пользователи',
    code: 'list-staff'
  },
  {
    path: '/suppliers',
    icon: 'icon-Outline-Ticket',
    activeIcon: 'icon-Bold-Ticket',
    label: 'Поставщики',
    code: 'suppliers-list'
  },
  {
    path: '/reports',
    icon: 'icon-Outline-Activity',
    activeIcon: 'icon-Bold-Activity',
    label: 'Отчеты',
    code: 'customize-list',
    children: [
      {
        path: '/reports/basic-indicators',
        label: 'Основные показатели',
        code: 'customize-list',
      }
    ]
  },
  {
    path: '/settings',
    icon: 'icon-Outline-Setting',
    activeIcon: 'icon-Bold-Setting',
    label: 'Настройки',
    children: [
      {
        path: '/settings/exchange-rates',
        label: 'Курсы валют',
        code: 'get-exchange-rates'

      },
      {
        path: '',
        label: 'Правила',
        accordion: true,
        children: [
          {
            path: '/settings/rule-list',
            label: 'Список правил',
            code: 'rules-user-collection'

          },
          {
            path: '/settings/rules-history',
            label: 'История использования',
            code: 'rules-get-history-list'
          }
        ]
      },
      {
        path: '/settings/route-receipt',
        label: 'Маршрутна',
        code: 'reciept-pattern-list'
      },
      {
        path: '/settings/personalization',
        label: 'Персонализация',
        code: 'home'
      }
    ]
  }
] as ISidebarItem[]
