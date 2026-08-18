import { StatusOptions, TaskStatus } from '@/shared/types/enums'
import { useAppDispatch } from '@/shared/lib'
import { updateTaskAC } from '@/entities/tasks'

type Props = {
  todolistId: string
  taskId: string
  current: TaskStatus
}

export const UpdateStatus = ({ todolistId, taskId, current }: Props) => {
  const dispatch = useAppDispatch()

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(updateTaskAC({ todolistId, taskId, task: { status: Number(event.target.value) } }))
  }

  return (
    <select
      defaultValue={StatusOptions[current].value}
      className={StatusOptions[current].color}
      onChange={handleChange}>
      {Object.values(StatusOptions).map((status) => (
        <option key={status.value} value={status.value} className={status.color}>
          {status.label}
        </option>
      ))}
    </select>
  )
}
