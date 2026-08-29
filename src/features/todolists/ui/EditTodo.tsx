import { Form, updateTodolistAC } from '@/entities/todolists/'
import { useAppDispatch } from '@/shared/lib'
import { useState } from 'react'

type Props = {
  todolistId: string
  title: string
  description: string
  color: string
  close: () => void
}

export const EditTodo = ({ todolistId, title, description, color, close }: Props) => {
  const [values, setValues] = useState({ title, description, color })
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

    dispatch(updateTodolistAC({ id: todolistId, todolist: values }))
    close()
  }

  return (
    <Form
      title={values.title}
      description={values.description}
      color={values.color}
      onChange={handleChange}
      close={close}
      onSubmit={handleSubmit}
      setColor={handleColor}
      Ftitle={`Editing todo list "${title}"`}
      Fdescription="Add a new todo list to organize your tasks"
      action="Edit Todo"
    />
  )
}
