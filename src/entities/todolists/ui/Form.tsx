import { Button, Icon, Input, TextArea, TitleHeader } from '@/shared/ui'
import { Colors } from '@/entities/todolists/'
import { createPortal } from 'react-dom'

type Form = {
  Ftitle?: string
  Fdescription?: string
  action?: string
}

type Props = Form & {
  title: string
  description: string
  color: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void
  close: () => void
  setColor: (color: string) => void
}

export const Form = ({
  title,
  description,
  color,
  onChange,
  onSubmit,
  close,
  setColor,
  Ftitle = 'Fill the form',
  Fdescription = '',
  action = 'Submit',
}: Props) => {
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
    </div>,
    document.body,
  )
}
