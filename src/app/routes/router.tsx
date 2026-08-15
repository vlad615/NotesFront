import '@/index.css'
import { App } from '../App.tsx'
import { createBrowserRouter } from 'react-router-dom'
import { TodolistPage } from '@/pages/todolists'
import { Paths } from './paths.ts'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: Paths.todoLists,
    Component: TodolistPage,
  },
])
