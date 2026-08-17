import { App } from '../App.tsx'
import { createBrowserRouter } from 'react-router-dom'
import { TodolistPage, TodolistsPage } from '@/pages/todolists'
import { Paths } from './paths.ts'

export const router = createBrowserRouter([
  {
    path: Paths.home,
    Component: App,
  },
  {
    path: Paths.todoLists,
    Component: TodolistsPage,
  },
  {
    path: Paths.todoList(':todosId'),
    Component: TodolistPage,
  },
])
