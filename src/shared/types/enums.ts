export enum TaskStatus {
  Active = 0,
  InProgress = 1,
  Completed = 2,
  Draft = 3,
}

export enum TaskPriority {
  Low = 0,
  Middle = 1,
  Hi = 2,
  Urgently = 3,
  Later = 4,
}

export const StatusOptions = {
  0: {
    value: 0,
    label: 'Active',
    color: 'text-blue-500',
  },
  1: {
    value: 1,
    label: 'In Progress',
    color: 'text-yellow-500',
  },
  2: {
    value: 2,
    label: 'Completed',
    color: 'text-green-500',
  },
  3: {
    value: 3,
    label: 'Draft',
    color: 'text-gray-500',
  },
} as const

export const PriorityOptions = {
  0: {
    value: 0,
    label: 'Low',
    color: 'text-gray-500',
  },
  1: {
    value: 1,
    label: 'Middle',
    color: 'text-blue-500',
  },
  2: {
    value: 2,
    label: 'High',
    color: 'text-orange-500',
  },
  3: {
    value: 3,
    label: 'Urgently',
    color: 'text-red-500',
  },
  4: {
    value: 4,
    label: 'Later',
    color: 'text-purple-500',
  },
} as const
