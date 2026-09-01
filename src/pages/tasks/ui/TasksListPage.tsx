import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { selectTasks } from '@/entities/tasks'
import { Navigate } from 'react-router-dom'

export const TasksListPage = () => {
  useAppSelector(selectTasks)

  return <Navigate to="/developing" />
}
