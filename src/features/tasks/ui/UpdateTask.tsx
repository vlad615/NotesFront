import { useState } from 'react'
import { Form, updateTaskAC, type UpdateTaskModel } from '@/entities/tasks/'
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
    console.log('handel')

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

      {isOpen && <Form task={formValues} onChange={handleChange} onSubmit={handleConfirm} close={handleCancel} />}
    </>
  )
}
