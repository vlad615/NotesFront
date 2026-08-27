import { useAppDispatch, useClickOutside } from '@/shared/lib/'
import { useRef, useState } from 'react'
import { Icon } from '@/shared/ui'
import { deleteTodolistAC, Form } from '@/entities/todolists'
import { useNavigate } from 'react-router-dom'
import { EditTodo } from './EditTodo'
import { Delete } from './Delete'

type Props = {
  todolistId: string
  title: string
  description: string
  color: string
  large?: boolean
  back?: boolean
}

export const EditDelete = ({ todolistId, large, back, ...todo }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false)

  const menuRef = useRef<HTMLDivElement>(null)
  useClickOutside(menuRef, () => setIsOpen(false))

  function handlerOpen(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <button className="text-text cursor-pointer hover:bg-border rounded-full p-0.5" onClick={handlerOpen}>
        <Icon iconId="more-vert" width={large ? '40px' : '25px'} height={large ? '40px' : '25px'} fill="fill-current" />
      </button>
      {isOpen && (
        <ul
          className="absolute z-50 top-full right-0 min-w-max bg-surface py-1 rounded-lg shadow-xl"
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
          }}>
          <li
            className="cursor-pointer px-2 py-1 hover:bg-background-menu"
            onClick={() => {
              setIsOpen(false)
              setIsEditOpen(true)
            }}>
            Change
          </li>
          <Delete todolistId={todolistId} back={back} />
        </ul>
      )}

      {isEditOpen && <EditTodo todolistId={todolistId} {...todo} close={() => setIsEditOpen(false)} />}
    </div>
  )
}
