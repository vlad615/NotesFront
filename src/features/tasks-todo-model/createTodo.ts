import { type Dispatch } from '@reduxjs/toolkit'
import { createTodolistAC } from '@/entities/todolists/'
import { createTasksListAC } from '@/entities/tasks/'

export function createTodo(title: string, description: string | null, color: string, dispatch: Dispatch) {
  const result = dispatch(createTodolistAC({ title, description, color }))

  dispatch(createTasksListAC({ todolistId: result.payload.id }))
}
