export const Paths = {
  home: '/',
  todoLists: '/todo-lists',
  tasks: '/tasks',
  login: '/login',
  admin: '/admin',
  error: '/error',
  developing: '/developing',

  todoList(id: string) {
    return `/todo-lists/${id}`
  },
} as const
