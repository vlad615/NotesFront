import { Button, Icon, TitleHeader } from '@/shared/ui'
import { useAppDispatch } from '@/shared/lib'
import { createTodo } from '@/features/tasks-todo-model'
import { useState } from 'react'

const initialFormValues = {
  title: '',
  description: '',
  color: '#8b5cf6',
}

const colors = ['#8b5cf6', '#f472b6', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#14b8a6', '#a855f7']

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
            className="w-full max-w-xl rounded-2xl bg-surface p-2 animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}>
            <TitleHeader title="Create New To Do List" description="Add a new todo list to organize your tasks">
              <button onClick={setModal} className="cursor-pointer text-text-secondary hover:text-text self-start">
                <Icon iconId="close" width="30" height="30" fill="fill-current" />
              </button>
            </TitleHeader>

            <form onSubmit={handleSubmit} className="space-y-3">
              <label htmlFor="title" className="block text-lg font-semibold text-text-secondary">
                Title: <span className="text-red-500">*</span>
                <input
                  id="title"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  placeholder="Enter list title..."
                  className="mt-0.5 w-full rounded-xl border border-border bg-transparent p-1.5 text-text placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </label>

              <label htmlFor="description" className="block text-lg font-semibold text-text-secondary">
                Description:
                <textarea
                  id="description"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Enter description (optional)..."
                  className="mt-0.5 w-full resize-none rounded-xl border border-border bg-transparent p-1.5 text-text placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </label>

              <label className="block text-lg font-semibold text-text-secondary">
                Color:
                <ul className="flex items-center gap-3 mt-2">
                  {colors.map((color) => {
                    const isSelected = values.color == color
                    return (
                      <li
                        key={color}
                        onClick={() => setValues((prev) => ({ ...prev, color }))}
                        className={`flex items-center justify-center text-white h-3.5 w-3.5 cursor-pointer rounded-lg transition-all`}
                        style={{ backgroundColor: color, boxShadow: isSelected ? `0 0 15px ${color}` : 'none' }}>
                        {isSelected && <Icon iconId="checked" fill="fill-current" />}
                      </li>
                    )
                  })}
                </ul>
              </label>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={setModal}
                  className="rounded-xl border border-slate-300 bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700">
                  Create List
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Button onClick={setModal} bg="bg-primary" border="primary">
        <Icon iconId="plus" width="20" height="20" fill="fill-current" />
        New Todo
      </Button>
    </>
  )
}
