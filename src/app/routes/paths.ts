export const Paths = {
  home: '/',
  todoLists: '/todo-lists',

  todoList(id: string) {
    const url = `/todo-lists/${id}`
    console.log(url)
    return url
  },
} as const
