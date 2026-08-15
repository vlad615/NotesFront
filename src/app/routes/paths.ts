export const Paths = {
  home: '/',
  todoLists: '/todo-lists',

  todoList(id: string) {
    return `/todo-lists/${id}`
  },
} as const
