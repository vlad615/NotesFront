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

export const colors = ['#8b5cf6', '#f472b6', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#14b8a6', '#a855f7']
