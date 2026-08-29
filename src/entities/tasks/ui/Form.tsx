import { Button, Icon, Input, InputDate, TextArea, TitleHeader } from '@/shared/ui'
import { type UpdateTaskModel } from '@/entities/tasks/'
import { Colors } from '@/entities/todolists/'
import { createPortal } from 'react-dom'

type Form = {
  Ftitle?: string
  Fdescription?: string
  action?: string
}

type Props = Form & {
  task: Omit<UpdateTaskModel, 'status' | 'priority'>
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void
  close: () => void
}

export const Form = ({
  task,
  onChange,
  onSubmit,
  close,
  Ftitle = 'Fill the form',
  Fdescription = '',
  action = 'Submit',
}: Props) => {
  console.log('form')

  return createPortal(
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
          <div className="flex gap-1.5">
            <div className="flex flex-col gap-1.5">
              <Input
                lable="Title"
                onChange={onChange}
                name="title"
                required
                value={task.title}
                placeholder="Enter list title..."
              />
              <TextArea
                lable="Description"
                value={task.description}
                name="description"
                onChange={onChange}
                rows={3}
                placeholder="Enter description (optional)..."
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <InputDate name="startDate" label="Дата начала" value={task.startDate ?? ''} onChange={onChange} />
              <InputDate name="deadline" label="Срок выполнения" value={task.deadline ?? ''} onChange={onChange} />
              <InputDate
                name="spendtime"
                label="Время затрачено"
                value={task.spendtime ?? ''}
                onChange={onChange}
                type="time"
              />
            </div>
          </div>

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
    </div>,
    document.body,
  )
}
