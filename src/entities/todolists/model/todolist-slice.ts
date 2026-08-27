import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { TodoList, TodoListChanges } from './types'

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
        console.log('delete')

        state.todoLists.splice(index, 1)
      }
    }),
    updateTodolistAC: create.reducer<{ id: string; todolist: TodoListChanges }>((state, action) => {
      const todo_updated = state.todoLists.find((todo) => todo.id === action.payload.id)
      console.log(todo_updated)

      if (todo_updated) {
        Object.assign(todo_updated, action.payload.todolist)

        console.log(todo_updated)
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
