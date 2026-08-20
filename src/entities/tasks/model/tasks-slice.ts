import { createSlice } from '@reduxjs/toolkit'
import type { CreateTaskModel, DomainTask, TasksType, UpdateTaskModel } from './types'

const initialState: TasksType = {
  '1': [
    {
      id: '1',
      todoListId: '1',

      title: 'Learn React',
      description: 'Study React architecture',

      status: 0,
      priority: 2,

      startDate: '2026-08-15T10:00:00',
      deadline: '2026-08-20T18:00:00',
      spendtime: '02:30:00',

      addedDate: '2026-08-15T09:00:00',
      order: 0,
      updating: false,
    },
    {
      id: '2',
      todoListId: '1',

      title: 'Learn TypeScript',
      description: 'Practice TypeScript types',

      status: 1,
      priority: 2,

      startDate: '2026-08-16T10:00:00',
      deadline: '2026-08-22T18:00:00',
      spendtime: '01:00:00',

      addedDate: '2026-08-15T09:30:00',
      order: 1,
      updating: false,
    },
    {
      id: '3',
      todoListId: '1',

      title: 'Buy groceries',
      description: '',

      status: 0,
      priority: 0,

      startDate: '2026-08-15T12:00:00',
      deadline: '2026-08-15T18:00:00',
      spendtime: '00:45:00',

      addedDate: '2026-08-15T10:00:00',
      order: 2,
      updating: false,
    },
  ],
  '2': [
    {
      id: '1',
      todoListId: '2',

      title: 'Learn React',
      description: 'Study React architecture',

      status: 0,
      priority: 2,

      startDate: '2026-08-15T10:00:00',
      deadline: '2026-08-20T18:00:00',
      spendtime: '02:30:00',

      addedDate: '2026-08-15T09:00:00',
      order: 0,
      updating: false,
    },
    {
      id: '2',
      todoListId: '2',

      title: 'Learn TypeScript',
      description: 'Practice TypeScript types',

      status: 1,
      priority: 2,

      startDate: '2026-08-16T10:00:00',
      deadline: '2026-08-22T18:00:00',
      spendtime: '01:00:00',

      addedDate: '2026-08-15T09:30:00',
      order: 1,
      updating: false,
    },
    {
      id: '3',
      todoListId: '2',

      title: 'Buy groceries',
      description: '',

      status: 0,
      priority: 0,

      startDate: '2026-08-15T12:00:00',
      deadline: '2026-08-15T18:00:00',
      spendtime: '00:45:00',

      addedDate: '2026-08-15T10:00:00',
      order: 2,
      updating: false,
    },
  ],
  '3': [
    {
      id: '1',
      todoListId: '3',

      title: 'Learn React',
      description: 'Study React architecture',

      status: 0,
      priority: 2,

      startDate: '2026-08-15T10:00:00',
      deadline: '2026-08-20T18:00:00',
      spendtime: '02:30:00',

      addedDate: '2026-08-15T09:00:00',
      order: 0,
      updating: false,
    },
    {
      id: '2',
      todoListId: '3',

      title: 'Learn TypeScript',
      description: 'Practice TypeScript types',

      status: 1,
      priority: 2,

      startDate: '2026-08-16T10:00:00',
      deadline: '2026-08-22T18:00:00',
      spendtime: '01:00:00',

      addedDate: '2026-08-15T09:30:00',
      order: 1,
      updating: false,
    },
    {
      id: '3',
      todoListId: '3',

      title: 'Buy groceries',
      description: '',

      status: 0,
      priority: 0,

      startDate: '2026-08-15T12:00:00',
      deadline: '2026-08-15T18:00:00',
      spendtime: '00:45:00',

      addedDate: '2026-08-15T10:00:00',
      order: 2,
      updating: false,
    },
  ],
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasksState: initialState,
  },
  selectors: {
    selectTasks: (state) => state.tasksState,
  },
  reducers: (create) => ({
    createTasksListAC: create.reducer<{ todolistId: string }>((state, action) => {
      state.tasksState[action.payload.todolistId] = []
    }),
    createTaskAC: create.preparedReducer(
      (payload: { todolistId: string; task: CreateTaskModel }) => {
        const newTask: DomainTask = {
          id: crypto.randomUUID(),
          title: payload.task.title,
          status: 0,
          addedDate: new Date().toISOString(),
          priority: 0,
          startDate: payload.task.startDate || new Date().toISOString(),
          deadline: payload.task.deadline || '',
          description: payload.task.description || '',
          spendtime: '00:00',
          todoListId: payload.todolistId,
          order: 0,
          updating: false,
        }
        return { payload: { todolistId: payload.todolistId, newTask } }
      },
      (state, action) => {
        state.tasksState[action.payload.todolistId].unshift(action.payload.newTask)
      },
    ),
    deleteTaskAC: create.reducer<{ todolistId: string; taskId: string }>((state, action) => {
      const index = state.tasksState[action.payload.todolistId].findIndex((task) => task.id === action.payload.taskId)
      if (index !== -1) {
        state.tasksState[action.payload.todolistId].splice(index, 1)
      }
    }),
    updateTaskAC: create.reducer<{ todolistId: string; taskId: string; task: UpdateTaskModel }>((state, action) => {
      const task = state.tasksState[action.payload.todolistId].find((task) => task.id === action.payload.taskId)
      if (task) {
        Object.assign(task, action.payload.task)
      }
    }),
    deleteAllTasksAC: create.reducer<{ id: string }>((state, action) => {
      state.tasksState[action.payload.id] = []
    }),
    deleteTaskListAC: create.reducer<{ id: string }>((state, action) => {
      delete state.tasksState[action.payload.id]
    }),
  }),
})

export const { selectTasks } = tasksSlice.selectors
export const { createTasksListAC, createTaskAC, deleteTaskAC, deleteAllTasksAC, deleteTaskListAC, updateTaskAC } =
  tasksSlice.actions
export const tasksReducer = tasksSlice.reducer
