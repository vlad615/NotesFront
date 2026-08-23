import { Colors } from '@/entities/todolists/'
import { createTodo } from '@/features/tasks-todo-model'
import { useAppDispatch } from '@/shared/lib'
import { Button, Icon, Input, TextArea, TitleHeader } from '@/shared/ui'
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

  const handleSubmit = (e: React.FormEvent) => {
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35" onClick={setModal}>
          <div
            className="w-full max-w-xl mx-1.5 rounded-2xl bg-surface p-2 animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}>
            <TitleHeader title="Create New To Do List" description="Add a new todo list to organize your tasks">
              <button onClick={setModal} className="cursor-pointer text-text-secondary hover:text-text self-start">
                <Icon iconId="close" width="30" height="30" fill="fill-current" />
              </button>
            </TitleHeader>

            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                lable="Title"
                onChange={handleChange}
                name="title"
                required
                value={values.title}
                placeholder="Enter list title..."
              />
              <TextArea
                lable="Description"
                value={values.description}
                name="description"
                onChange={handleChange}
                rows={3}
                placeholder="Enter description (optional)..."
              />
              <Colors current={values.color} onClick={(color) => setValues((prev) => ({ ...prev, color }))} />

              <div className="flex justify-end gap-3 items-center">
                <Button onClick={setModal} bg="bg-primary" border="border-border" type="button">
                  Cancel
                </Button>
                <Button filled bg="bg-primary" border="border-border" type="submit">
                  Create List
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Button onClick={setModal} filled bg="bg-primary" border="border-primary">
        <Icon iconId="plus" width="20" height="20" fill="fill-current" />
        New Todo
      </Button>
    </>
  )
}
