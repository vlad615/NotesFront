import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from './app-slice'
import { todolistsReducer } from '@/entities/todolists/model/todolist-slice'
import { tasksReducer } from '@/entities/tasks'

export const store = configureStore({
  reducer: {
    app: appReducer,
    todolists: todolistsReducer,
    tasks: tasksReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
