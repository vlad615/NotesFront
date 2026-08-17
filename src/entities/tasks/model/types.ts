import { TaskPriority, TaskStatus } from '@/shared/types'

export type DomainTask = {
  description: string
  title: string
  status: TaskStatus
  priority: TaskPriority
  startDate: string
  deadline: string
  spendtime: string
  id: string
  todoListId: string
  order: number
  addedDate: string
  updating: boolean
}

export type UpdateTaskModel = Partial<Omit<DomainTask, 'id' | 'todoListId' | 'order' | 'addedDate' | 'updating'>>

export type CreateTaskModel = Omit<UpdateTaskModel, 'spendtime'> & { title: string }

export type TasksType = Record<string, DomainTask[]>
