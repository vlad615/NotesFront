import { App } from '../App.tsx'
import { createBrowserRouter } from 'react-router-dom'
import { TodolistPage, TodolistsPage } from '@/pages/todolists'
import { Paths } from './paths.ts'
import { Component } from 'react'
import { MainLayout } from '../layout/MainLayout.tsx'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
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
    ],
  },
])
