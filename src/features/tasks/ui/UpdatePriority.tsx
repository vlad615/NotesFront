import { PriorityOptions, TaskPriority } from '@/shared/types/enums'
import { useAppDispatch } from '@/shared/lib'
import { updateTaskAC } from '@/entities/tasks'

type Props = {
  todolistId: string
  taskId: string
  current: TaskPriority
}

export const UpdatePriority = ({ todolistId, taskId, current }: Props) => {
  const dispatch = useAppDispatch()

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(updateTaskAC({ todolistId, taskId, task: { priority: Number(event.target.value) } }))
  }

  return (
    <select
      defaultValue={PriorityOptions[current].value}
      className={PriorityOptions[current].color}
      onChange={handleChange}>
      {Object.values(PriorityOptions).map((status) => (
        <option key={status.value} value={status.value} className={status.color}>
          {status.label}
        </option>
      ))}
    </select>
  )
}
