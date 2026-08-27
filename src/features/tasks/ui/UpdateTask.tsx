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
        <div
          className="fixed inset-0 z-90 flex items-center justify-center bg-black/35 px-1.5"
          onClick={(e) => {
            if (e.target === e.currentTarget) close()
          }}>
          <div
            className="w-full max-w-xl rounded-2xl bg-surface p-2 animate-in fade-in zoom-in-95 duration-300"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true">
            <TitleHeader title={Ftitle} description={Fdescription}>
              <button onClick={close} className="cursor-pointer text-text-secondary hover:text-text self-start">
                <Icon iconId="close" width="30" height="30" fill="fill-current" />
              </button>
            </TitleHeader>

            <form onSubmit={onSubmit} className="space-y-3">
              <Input
                lable="Title"
                onChange={onChange}
                name="title"
                required
                value={title}
                placeholder="Enter list title..."
              />
              <TextArea
                lable="Description"
                value={description}
                name="description"
                onChange={onChange}
                rows={3}
                placeholder="Enter description (optional)..."
              />
              <Colors current={color} onClick={(color) => setColor(color)} />

              <div className="flex justify-end gap-3 items-center">
                <Button onClick={close} primary type="button">
                  Cancel
                </Button>
                <Button filled primary type="submit">
                  {action}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
