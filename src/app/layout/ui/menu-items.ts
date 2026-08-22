export type MenuItem = {
  title: string
  path: string
  iconId: string
}

export const defaultMenu: MenuItem[] = [
  {
    title: 'Settings',
    path: '/settings',
    iconId: 'settings',
  },
  {
    title: 'Help',
    path: '/help',
    iconId: 'help',
  },
]

export const mainMenu: MenuItem[] = [
  {
    title: 'Lists',
    path: '/todo-lists',
    iconId: 'folder',
  },
  {
    title: 'Tasks',
    path: '/tasks',
    iconId: 'logo',
  },
  {
    title: 'Calendar',
    path: '/calendar',
    iconId: 'calendar',
  },
  {
    title: 'Statistics',
    path: '/statistics',
    iconId: 'statistics',
  },
]
