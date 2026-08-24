import { useClickOutside } from '@/shared/lib/'
import { useRef, useState } from 'react'
import { Icon } from '@/shared/ui'

type Props = {
  large?: boolean
}

export const EditDelete = ({ large }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const menuRef = useRef<HTMLDivElement>(null)

  useClickOutside(menuRef, () => setIsOpen(false))

  function handlerOpen(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative" ref={menuRef}>
      <button className="text-text cursor-pointer hover:bg-border rounded-full p-0.5" onClick={handlerOpen}>
        <Icon iconId="more-vert" width={large ? '40px' : '25px'} height={large ? '40px' : '25px'} fill="fill-current" />
      </button>
      {isOpen && (
        <div
          className="absolute z-50 top-full right-0 min-w-max bg-surface py-1 rounded-lg shadow-xl"
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            setIsOpen(false)
          }}>
          <ul>
            <li className="cursor-pointer px-2 py-1 hover:bg-background-menu">Change</li>
            <li className="cursor-pointer px-2 py-1 hover:bg-background-menu">Delete</li>
          </ul>
        </div>
      )}
    </div>
  )
}
