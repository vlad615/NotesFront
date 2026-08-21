import { useAppSelector } from '@/shared/lib/useAppSelector'
import { selectTasks } from '@/entities/tasks'

export const TasksListPage = () => {
  useAppSelector(selectTasks)

  return <div>{}</div>
}
