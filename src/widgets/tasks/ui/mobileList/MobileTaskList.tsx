import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { Filter, selectTasks, type DomainTask } from '@/entities/tasks/'
import { TaskStatus } from '@/entities/tasks'
import { useState } from 'react'
import { TaskItem } from './TaskItem'

type Props = {
  todolistId: string
}
const emptyTask: DomainTask[] = []

export const MobileTasksList = ({ todolistId }: Props) => {
  const tasks = useAppSelector(selectTasks)[todolistId] || emptyTask
  const [filter, setFilter] = useState<'all' | TaskStatus>('all')
  const filteredTasks = filter === 'all' ? tasks : tasks.filter((task) => task.status === Number(filter))

  return (
    <section className="mt-4 min-w-0 max-w-full">
      <Filter value={filter} onClick={(f) => setFilter(f)} />

      <div>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <p className="px-4 py-10 text-center text-sm text-text-secondary">No tasks in this view</p>
        )}
      </div>
    </section>
  )
}
