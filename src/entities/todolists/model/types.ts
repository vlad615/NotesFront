export type TodoList = {
  id: string
  title: string
  description: string
  color: string
  addedDate: string
  filter: Filter
}

export type TodoListChanges = Partial<Omit<TodoList, 'id' | 'addedDate'>>

export type Filter = 'all' | 'active' | 'completed'
