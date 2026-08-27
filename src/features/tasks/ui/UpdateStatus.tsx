import { StatusOptions, TaskStatus } from '@/entities/tasks/model/enums'
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
      className={
        StatusOptions[current].color +
        ' appearance-none cursor-pointer font-semibold text-base text-center relative p-0.5 rounded-lg'
      }
      style={{ backgroundColor: StatusOptions[current].backgroundColor }}
      onChange={handleChange}>
      {Object.values(StatusOptions).map((status) => (
        <option
          key={status.value}
          value={status.value}
          className={status.color}
          style={{ backgroundColor: StatusOptions[status.value].backgroundColor }}>
          {status.label}
        </option>
      ))}
    </select>
  )
}
