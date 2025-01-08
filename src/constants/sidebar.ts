import { ISidebarItem } from "@/types/ui";

export default [
  {
    path: '/home',
    icon: 'icon-Home-Outline',
    activeIcon: 'icon-Home',
    label: 'Дашборд',
    code: 'search'
  },
  {
    path: '/search',
    icon: 'icon-Search-Outline-Outline',
    activeIcon: 'icon-Search-Outline-Outline',
    label: 'Поиск',
    code: 'search'
  },
  {
    path: '/charter',
    icon: 'icon-plane-Outline',
    activeIcon: 'icon-plane-filed',
    label: 'Чартер',
    code: 'provider-charter-list'
  },
  {
    path: '/orders',
    icon: 'icon-Buy-Outline',
    activeIcon: 'icon-Buy',
    label: 'Заказы',
    code: 'list-own-order'
  },
  {
    path: '/agreements',
    icon: 'icon-Document-Outline',
    activeIcon: 'icon-Document',
    label: 'Договоры',
    code: 'agreement-list'
  },
  {
    path: '/community',
    icon: 'icon-Chat-Outline',
    activeIcon: 'icon-Chat-Outline',
    label: 'Сообщество',
    code : 'group-community'
  },
  {
    path: '/users',
    icon: 'icon-User-Outline',
    activeIcon: 'icon-User',
    label: 'Пользователи',
    code: 'list-staff'
  },
  {
    path: '/suppliers',
    icon: 'icon-Ticket-Outline',
    activeIcon: 'icon-Ticket',
    label: 'Поставщики',
    code: 'suppliers-list'
  },
  {
    path: '/reports',
    icon: 'icon-Activity-Outline',
    activeIcon: 'icon-Activity',
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
    icon: 'icon-Setting-Outline',
    activeIcon: 'icon-Setting',
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
