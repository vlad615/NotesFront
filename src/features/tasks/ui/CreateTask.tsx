import { createTaskAC, Form, type UpdateTaskModel } from '@/entities/tasks/'
import { useAppDispatch } from '@/shared/lib'
import { Button, Icon } from '@/shared/ui'
import { useState } from 'react'

type Props = {
  todolistId: string
}

export const CreateTask = ({ todolistId }: Props) => {
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [formValues, setFormValues] = useState<Omit<UpdateTaskModel, 'status' | 'priority'>>({
    description: '',
    title: '',
    startDate: '',
    deadline: '',
    spendtime: '',
  })

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleCancel = () => {
    setIsOpen(false)
    setFormValues({
      description: '',
      title: '',
      startDate: '',
      deadline: '',
      spendtime: '',
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
    dispatch(createTaskAC({ todolistId, task: formValues }))
    setIsOpen(false)
  }

  return (
    <>
      <Button primary onClick={handleOpen}>
        <Icon iconId="plus" fill="fill-current" width="20" height="20" />
        New Task
      </Button>
      {isOpen && (
        <Form
          task={formValues}
          onChange={handleChange}
          onSubmit={handleConfirm}
          close={handleCancel}
          Ftitle="Create a new task"
          action="Create Task"
        />
      )}
    </>
  )
}
