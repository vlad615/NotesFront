import { TaskStatus } from '@/entities/tasks'
import { Filter, selectTasks, type DomainTask } from '@/entities/tasks/'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { useState } from 'react'
import { TaskItem } from './TaskItem'

type Props = {
  todolistId: string
}
const emptyTask: DomainTask[] = []

export const TasksList = ({ todolistId }: Props) => {
  const tasks = useAppSelector(selectTasks)[todolistId] || emptyTask
  const [filter, setFilter] = useState<'all' | TaskStatus>('all')
  const filteredTasks = filter === 'all' ? tasks : tasks.filter((task) => task.status === Number(filter))

  return (
    <section className="mt-4 overflow-x-auto scrollbar-thin scrollbar-thumb-primary-hover rounded-lg border border-border bg-surface shadow-sm">
      <Filter value={filter} onClick={(f) => setFilter(f)} />

      <table className="w-full min-w-max border-collapse text-left">
        <thead>
          <tr className="border-b border-border text-lg font-semibold uppercase tracking-wide text-text-secondary">
            {/* <th scope="col" className="w-3.5 py-2.5">
              <span className="sr-only">Select</span>
            </th> */}
            <th className="pl-1.5">Task</th>
            <th className="pr-2">Status</th>
            <th className="pr-2">Priority</th>
            <th className="pr-2">Start Date</th>
            <th className="pr-2">Deadline</th>
            <th>Spend Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
          ) : (
            <tr>
              <td colSpan={9} className="px-4 py-10 text-center text-sm text-text-secondary">
                No tasks in this view
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  )
}
