import { useAppDispatch } from '@/shared/lib'
import { deleteTaskAC } from '@/entities/tasks'
import { Icon } from '@/shared/ui'

type Props = {
  todolistId: string
  taskId: string
}

export const Delete = ({ todolistId, taskId }: Props) => {
  const dispatch = useAppDispatch()
  function deleteTask() {
    dispatch(deleteTaskAC({ todolistId, taskId }))
  }
  return (
    <button className="cursor-pointer p-1 rounded-full hover:bg-border text-text-secondary" onClick={deleteTask}>
      <Icon iconId="delete" width="25" height="25" fill="fill-current" />
    </button>
  )
}
