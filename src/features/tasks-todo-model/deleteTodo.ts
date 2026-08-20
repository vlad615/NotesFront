import { type Dispatch } from '@reduxjs/toolkit'
import { deleteTodolistAC } from '@/entities/todolists/'
import { deleteTaskListAC } from '@/entities/tasks/'

export function deleteTodo(id: string, dispatch: Dispatch) {
  dispatch(deleteTodolistAC({ id }))

  dispatch(deleteTaskListAC({ id }))
}
