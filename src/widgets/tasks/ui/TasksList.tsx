import { useAppSelector } from '@/shared/lib/useAppSelector'
import { selectTasks, type DomainTask } from '@/entities/tasks/'
import { TaskStatus } from '@/shared/types'
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
  const tabs = [
    { value: 'all' as const, label: 'All' },
    { value: TaskStatus.Active, label: 'Active' },
    { value: TaskStatus.InProgress, label: 'In Progress' },
    { value: TaskStatus.Completed, label: 'Completed' },
    { value: TaskStatus.Draft, label: 'Draft' },
  ]

  return (
    <section className="mt-4 overflow-x-auto rounded-lg border border-border bg-surface shadow-sm">
      <nav className="flex gap-3 border-b border-border px-2" aria-label="Task filters">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            type="button"
            onClick={() => setFilter(tab.value)}
            className={`border-b-2 px-1 py-1.5 text-lg transition-colors cursor-pointer ${
              filter === tab.value
                ? 'border-primary text-primary'
                : 'border-transparent text-text-secondary hover:text-text'
            }`}>
            {tab.label}
          </button>
        ))}
      </nav>

      <table className="w-full border-collapse text-left ">
        <thead>
          <tr className="border-b border-border text-lg font-semibold uppercase tracking-wide text-text-secondary">
            <th scope="col" className="w-3.5 py-2.5">
              <span className="sr-only">Select</span>
            </th>
            <th>Task</th>
            <th className="pr-2">Status</th>
            <th className="pr-2">Priority</th>
            <th className="pr-2">Start Date</th>
            <th className="pr-2">Deadline</th>
            <th className="">Spend Time</th>
            <th className=""></th>
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
