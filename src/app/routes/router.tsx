import { Admin } from '@/pages/admin/'
import { InDeveloping, NotFound } from '@/pages/error/'
import { Login } from '@/pages/login/'
import { TasksListPage } from '@/pages/tasks/'
import { TodolistPage, TodolistsPage } from '@/pages/todolists'
import { createBrowserRouter, Navigate, type RouteObject } from 'react-router-dom'
import { App } from '../App.tsx'
import { MainLayout } from '../layout/MainLayout.tsx'
import { Paths } from './paths.ts'
import { ProtectedRoute } from './ProtectedRoute.tsx'

const publicRoutes: RouteObject[] = [
  {
    path: Paths.home,
    element: <App />,
  },
  {
    path: Paths.todoLists,
    element: <TodolistsPage />,
  },
  {
    path: Paths.todoList(':todosId'),
    element: <TodolistPage />,
  },
  {
    path: Paths.tasks,
    element: <TasksListPage />,
  },
  {
    path: Paths.error,
    element: <NotFound />,
  },
  {
    path: Paths.developing,
    element: <InDeveloping />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: Paths.admin,
    element: <Admin />,
  },
  {
    path: Paths.login,
    element: <Login />,
  },
]

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <Navigate to="/error" />,
    children: [...publicRoutes, { element: <ProtectedRoute />, children: privateRoutes }],
  },
])
