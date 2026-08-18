import { useAppDispatch } from '@/shared/lib'
import { deleteTaskAC } from '@/entities/tasks'

type Props = {
  todolistId: string
  taskId: string
}

export const Delete = ({ todolistId, taskId }: Props) => {
  const dispatch = useAppDispatch()
  function deleteTask() {
    dispatch(deleteTaskAC({ todolistId, taskId }))
  }
  return <div onClick={deleteTask}>Delete</div>
}
