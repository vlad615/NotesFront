import type { DomainTask } from '@/entities/tasks/'
import { UpdatePriority, UpdateStatus } from '@/features/tasks/'
import { Delete } from '@/features/tasks/ui/Delete'
import { UpdateTask } from '@/features/tasks/ui/UpdateTask'

type Props = {
  task: DomainTask
}

export const TaskItem = ({ task }: Props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', border: '1px solid black' }}>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <UpdatePriority todolistId={task.todoListId} taskId={task.id} current={task.priority} />
      <UpdateStatus todolistId={task.todoListId} taskId={task.id} current={task.status} />
      <label>
        дата добавления: <time dateTime={task.addedDate}>{task.addedDate.replaceAll('-', '.').replace('T', ' ')}</time>
      </label>
      <label>
        Дедлайн: <time dateTime={task.deadline}>{task.deadline.replaceAll('-', '.').replace('T', ' ')}</time>
      </label>
      <label>Затраченое время: {task.spendtime}</label>
      <label>
        Начало: <time dateTime={task.startDate}>{task.deadline.replaceAll('-', '.').replace('T', ' ')}</time>
      </label>
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
  )
}
