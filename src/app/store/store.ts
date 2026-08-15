import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from './app-slice'
import { todolistsReducer } from '@/entities/todolists/model/todolist-slice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    todolists: todolistsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
