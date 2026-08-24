import { useState } from 'react'
import { updateTaskAC, type UpdateTaskModel } from '@/entities/tasks/'
import { useAppDispatch } from '@/shared/lib'
import { Icon } from '@/shared/ui'

type Props = {
  taskId: string
  todolistId: string
  task: Omit<UpdateTaskModel, 'status' | 'priority'>
}

export const UpdateTask = ({ taskId, todolistId, task }: Props) => {
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [formValues, setFormValues] = useState<Props['task']>({
    description: task.description || '',
    title: task.title || '',
    startDate: task.startDate || '',
    deadline: task.deadline || '',
    spendtime: task.spendtime || '',
  })

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleCancel = () => {
    setIsOpen(false)
    setFormValues({
      description: task.description || '',
      title: task.title || '',
      startDate: task.startDate || '',
      deadline: task.deadline || '',
      spendtime: task.spendtime || '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleConfirm = () => {
    dispatch(updateTaskAC({ todolistId, taskId, task: formValues }))
    setIsOpen(false)
  }

  return (
    <>
      <button className="cursor-pointer p-1 rounded-full hover:bg-border text-text-secondary" onClick={handleOpen}>
        <Icon iconId="edit" width="25" height="25" fill="fill-current" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={handleCancel}>
          <div
            className="bg-white rounded-lg shadow-lg p-7 max-w-md w-11/12 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}>
            <h2 className="mt-0 mb-5 text-gray-800 text-xl font-semibold">Изменить задачу</h2>

            <div className="mb-5 flex flex-col">
              <label htmlFor="title" className="mb-2 font-semibold text-gray-800 text-sm">
                Заголовок
              </label>
              <input
                id="title"
                type="text"
                name="title"
                value={formValues.title}
                onChange={handleChange}
                placeholder="Введите заголовок"
                className="px-3 py-2.5 border border-gray-300 rounded text-sm font-normal transition-colors focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mb-5 flex flex-col">
              <label htmlFor="description" className="mb-2 font-semibold text-gray-800 text-sm">
                Описание
              </label>
              <textarea
                id="description"
                name="description"
                value={formValues.description}
                onChange={handleChange}
                placeholder="Введите описание"
                rows={4}
                className="px-3 py-2.5 border border-gray-300 rounded text-sm font-normal transition-colors focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-y"
              />
            </div>

            <div className="mb-5 flex flex-col">
              <label htmlFor="startDate" className="mb-2 font-semibold text-gray-800 text-sm">
                Дата начала
              </label>
              <input
                id="startDate"
                type="datetime-local"
                name="startDate"
                value={formValues.startDate}
                onChange={handleChange}
                className="px-3 py-2.5 border border-gray-300 rounded text-sm font-normal transition-colors focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mb-5 flex flex-col">
              <label htmlFor="deadline" className="mb-2 font-semibold text-gray-800 text-sm">
                Срок выполнения
              </label>
              <input
                id="deadline"
                type="datetime-local"
                name="deadline"
                value={formValues.deadline}
                onChange={handleChange}
                className="px-3 py-2.5 border border-gray-300 rounded text-sm font-normal transition-colors focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mb-5 flex flex-col">
              <label htmlFor="spendtime" className="mb-2 font-semibold text-gray-800 text-sm">
                Время затрачено
              </label>
              <input
                id="spendtime"
                type="time"
                name="spendtime"
                value={formValues.spendtime}
                onChange={handleChange}
                className="px-3 py-2.5 border border-gray-300 rounded text-sm font-normal transition-colors focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="flex gap-2.5 justify-end mt-7 pt-5 border-t border-gray-200">
              <button
                className="px-5 py-2.5 border-none rounded text-sm font-semibold cursor-pointer transition-colors bg-gray-100 text-gray-800 hover:bg-gray-200"
                onClick={handleCancel}>
                Отмена
              </button>
              <button
                className="px-5 py-2.5 border-none rounded text-sm font-semibold cursor-pointer transition-all bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
                onClick={handleConfirm}>
                Изменить
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
