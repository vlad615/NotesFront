import type { DomainTask } from '@/entities/tasks/'
import { PriorityOptions } from '@/entities/tasks/model/enums'
import { UpdatePriority, UpdateStatus } from '@/features/tasks/'
import { Delete } from '@/features/tasks/ui/Delete'
import { UpdateTask } from '@/features/tasks/ui/UpdateTask'
import { DateTime } from '@/shared/ui/'

type Props = {
  task: DomainTask
}

export const TaskItem = ({ task }: Props) => {
  return (
    <details className="group border-b border-border last:border-b-0">
      <summary className="flex cursor-pointer list-none items-start gap-2 px-3 py-3 appearance-none">
        <input
          type="checkbox"
          aria-label={`Select ${task.title}`}
          className="mt-1.5 size-2 shrink-0 cursor-pointer accent-primary"
          onClick={(event) => event.stopPropagation()}
        />

        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-semibold text-text">{task.title}</span>
          <span className="mt-0.5 block line-clamp-2 text-xs text-text-secondary">
            {task.description || 'No description'}
          </span>
        </span>

        <time dateTime={task.deadline} className="flex shrink-0 flex-col text-right text-xs text-text-secondary">
          {DateTime(task.deadline)}
        </time>

        <span
          className={`mt-0.5 shrink-0 rounded-lg px-1.5 py-0.5 text-xs font-semibold ${PriorityOptions[task.priority].color}`}
          style={{ backgroundColor: PriorityOptions[task.priority].backgroundColor }}>
          {PriorityOptions[task.priority].label}
        </span>
      </summary>

      <div className="grid gap-3 border-t border-border bg-primary-light px-3 py-3 text-sm">
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
          <div>
            <dt className="text-xs text-text-secondary">Status</dt>
            <dd className="mt-1">
              <UpdateStatus todolistId={task.todoListId} taskId={task.id} current={task.status} />
            </dd>
          </div>
          <div>
            <dt className="text-xs text-text-secondary">Priority</dt>
            <dd className="mt-1">
              <UpdatePriority todolistId={task.todoListId} taskId={task.id} current={task.priority} />
            </dd>
          </div>
          <div>
            <dt className="text-xs text-text-secondary">Start date</dt>
            <dd className="mt-1 text-text">{DateTime(task.startDate)}</dd>
          </div>
          <div>
            <dt className="text-xs text-text-secondary">Spend time</dt>
            <dd className="mt-1 text-text">{task.spendtime || '-'}</dd>
          </div>
        </dl>

        <div className="flex justify-end gap-1 border-t border-border pt-2">
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
      </div>
    </details>
  )
}
