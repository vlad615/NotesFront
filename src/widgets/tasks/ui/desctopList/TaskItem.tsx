import type { DomainTask } from '@/entities/tasks/'
import { UpdatePriority, UpdateStatus } from '@/features/tasks/'
import { Delete } from '@/features/tasks/ui/Delete'
import { UpdateTask } from '@/features/tasks/ui/UpdateTask'
import { DateTime } from '@/shared/ui/'

type Props = {
  task: DomainTask
}

export const TaskItem = ({ task }: Props) => {
  return (
    <tr className="border-b border-border text-sm last:border-b-0">
      <td className="px-1 py-2">
        <input type="checkbox" aria-label={`Select ${task.title}`} className="cursor-pointer w-2 h-2 accent-primary" />
      </td>
      <td className="max-w-[320px] pr-1.5">
        <h3 className="truncate text-lg font-medium text-primary">{task.title}</h3>
        <p className="truncate text-sm text-text-secondary">{task.description || 'No description'}</p>
      </td>
      <td className="pr-1.5">
        <UpdateStatus todolistId={task.todoListId} taskId={task.id} current={task.status} />
      </td>
      <td>
        <UpdatePriority todolistId={task.todoListId} taskId={task.id} current={task.priority} />
      </td>
      <td>
        <time dateTime={task.startDate} className="flex flex-col text-sm text-text-secondary">
          {DateTime(task.startDate)}
        </time>
      </td>
      <td>
        <time dateTime={task.deadline} className="flex flex-col text-sm text-text-secondary">
          {DateTime(task.deadline)}
        </time>
      </td>
      <td className="text-sm text-text-secondary">{task.spendtime.slice(0, 5)}</td>
      <td>
        <div className="flex items-center">
          <UpdateTask
            todolistId={task.todoListId}
            taskId={task.id}
            task={{
              title: task.title,
              description: task.description,
              startDate: task.startDate,
              deadline: task.deadline,
              spendtime: task.spendtime,
            }}
          />
          <Delete todolistId={task.todoListId} taskId={task.id} />
        </div>
      </td>
    </tr>
  )
}
