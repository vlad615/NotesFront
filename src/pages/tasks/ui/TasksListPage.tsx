import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { selectTasks } from '@/entities/tasks'

export const TasksListPage = () => {
  useAppSelector(selectTasks)

  return <div>{}</div>
}
