import type { DomainTask } from '@/entities/tasks/'

type Props = {
  task: DomainTask
}

export const TaskItem = ({ task }: Props) => {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <time dateTime={task.addedDate}>{task.addedDate}</time>
      {task.deadline}
    </div>
  )
}
