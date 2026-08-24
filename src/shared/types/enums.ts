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
    backgroundColor: 'rgb(59 130 246 / 20%)',
    color: 'text-blue-500',
  },
  1: {
    value: 1,
    label: 'In Progress',
    backgroundColor: 'rgb(234 179 8 / 20%)',
    color: 'text-yellow-500',
  },
  2: {
    value: 2,
    label: 'Completed',
    backgroundColor: 'rgb(34 197 94 / 20%)',
    color: 'text-green-500',
  },
  3: {
    value: 3,
    label: 'Draft',
    backgroundColor: 'rgb(107 114 128 / 20%)',
    color: 'text-gray-500',
  },
} as const

export const PriorityOptions = {
  0: {
    value: 0,
    label: 'Low',
    color: 'text-gray-500',
    backgroundColor: 'rgb(107 114 128 / 20%)',
  },
  1: {
    value: 1,
    label: 'Middle',
    color: 'text-blue-500',
    backgroundColor: 'rgb(59 130 246 / 20%)',
  },
  2: {
    value: 2,
    label: 'High',
    color: 'text-orange-500',
    backgroundColor: 'rgb(249 115 22 / 20%)',
  },
  3: {
    value: 3,
    label: 'Urgently',
    color: 'text-red-500',
    backgroundColor: 'rgb(239 68 68 / 20%)',
  },
  4: {
    value: 4,
    label: 'Later',
    color: 'text-purple-500',
    backgroundColor: 'rgb(168 85 247 / 20%)',
  },
} as const
