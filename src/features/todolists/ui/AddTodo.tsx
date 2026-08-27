import { Form } from '@/entities/todolists/'
import { createTodo } from '@/features/tasks-todo-model'
import { useAppDispatch } from '@/shared/lib'
import { Button, Icon } from '@/shared/ui'
import { useState } from 'react'

const initialFormValues = {
  title: '',
  description: '',
  color: '#8b5cf6',
}

export const AddTodo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [values, setValues] = useState(initialFormValues)
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleColor = (color: string) => {
    setValues((prev) => ({ ...prev, color }))
  }

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!values.title.trim()) return

    createTodo(values.title, values.description || null, values.color, dispatch)
    setValues(initialFormValues)
    setIsOpen(false)
  }

  const setModal = () => setIsOpen(!isOpen)

  return (
    <>
      {isOpen && (
        <Form
          Ftitle="Create your new todo list"
          Fdescription="Add a new todo list to organize your tasks"
          action="Create Todo"
          title={values.title}
          description={values.description}
          color={values.color}
          onChange={handleChange}
          close={setModal}
          onSubmit={handleSubmit}
          setColor={handleColor}
        />
      )}

      <Button onClick={setModal} filled primary>
        <Icon iconId="plus" width="20" height="20" fill="fill-current" />
        New Todo
      </Button>
    </>
  )
}
