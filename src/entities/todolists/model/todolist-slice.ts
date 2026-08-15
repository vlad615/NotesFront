import { createSlice, nanoid } from '@reduxjs/toolkit'

export const initialState: TodoList[] = [
  {
    id: '1',
    title: 'Programming',
    description: 'Everything related to programming',
    color: '#6366f1',
    addedDate: '2026-08-10',
    filter: 'all',
  },
  {
    id: '2',
    title: 'Personal',
    description: 'Personal tasks and plans',
    color: '#22c55e',
    addedDate: '2026-08-11',
    filter: 'all',
  },
  {
    id: '3',
    title: 'English',
    description: 'English learning',
    color: '#f97316',
    addedDate: '2026-08-12',
    filter: 'all',
  },
]

export const todolistsSlice = createSlice({
  name: 'todolists',
  initialState: {
    todoLists: initialState,
  },
  selectors: {
    selectLists: (state) => state.todoLists,
  },
  reducers: (create) => ({
    deleteTodolistAC: create.reducer<{ id: string }>((state, action) => {
      const index = state.todoLists.findIndex((todolist) => todolist.id === action.payload.id)
      if (index !== -1) {
        state.todoLists.splice(index, 1)
      }
    }),
    updateTodolistAC: create.reducer<{ id: string; todolist: TodoListChanges }>((state, action) => {
      const todolist = state.todoLists.find((todolist) => todolist.id === action.payload.id)
      if (todolist) {
        Object.assign(todolist, action.payload.todolist)
      }
    }),
    createTodolistAC: create.preparedReducer(
      (args: { title: string; description: string | null; color: string }) => {
        const newTodolist: TodoList = {
          id: nanoid(),
          title: args.title,
          description: args.description || '',
          addedDate: new Date().toISOString(),
          color: args.color,
          filter: 'all',
        }
        return { payload: newTodolist }
      },
      (state, action) => {
        state.todoLists.push(action.payload)
      },
    ),
  }),
})

export const { deleteTodolistAC, createTodolistAC, updateTodolistAC } = todolistsSlice.actions
export const { selectLists } = todolistsSlice.selectors
export const todolistsReducer = todolistsSlice.reducer

export type TodoList = {
  id: string
  title: string
  description: string
  color: string
  addedDate: string
  filter: Filter
}

type TodoListChanges = Partial<Omit<TodoList, 'id' | 'addedDate'>>

export type Filter = 'all' | 'active' | 'completed'
