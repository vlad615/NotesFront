import { useAppSelector } from '@/shared/lib/useAppSelector'
import { selectTasks } from '@/entities/tasks'

export const TasksListPage = () => {
  const tasks = useAppSelector(selectTasks)

  return <div>{}</div>
}
