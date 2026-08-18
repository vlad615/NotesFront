import { useAppSelector } from '@/shared/lib/useAppSelector'
import { selectTasks, type DomainTask } from '@/entities/tasks/'
import { TaskItem } from './TaskItem'

type Props = {
  todolistId: string
}
const emptyTask: DomainTask[] = []

export const TasksList = ({ todolistId }: Props) => {
  const tasks = useAppSelector(selectTasks)[todolistId] || emptyTask

  return (
    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}
