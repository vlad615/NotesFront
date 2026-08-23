import { useClickOutside } from '@/shared/lib/'
import { Icon } from '@/shared/ui'
import { useRef, useState } from 'react'

type Props = {
  title: string
  color: string
  addedDate: string
}

export const CradHeader = ({ title, color, addedDate }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const menuRef = useRef<HTMLDivElement>(null)

  useClickOutside(menuRef, () => setIsOpen(false))

  function handlerOpen(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="flex gap-1.5 justify-between items-start">
        <div className="flex gap-1 items-start">
          <div className="relative px-1 py-2 md:p-0.5">
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-xl md:opacity-10"
              style={{ backgroundColor: color }}
            />
            <Icon iconId="folder" fill="hidden md:block" style={{ fill: color }} />
          </div>
          <div>
            <h2 className="font-semibold text-2xl">{title}</h2>
            <time dateTime={addedDate} className="text-text-secondary text-xs">
              Created: {addedDate}
            </time>
          </div>
        </div>

        <div className="relative" ref={menuRef}>
          <button className="text-text cursor-pointer hover:bg-border rounded-full p-0.5" onClick={handlerOpen}>
            <Icon iconId="more-vert" height="25" width="25" fill="fill-current" />
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
      </div>
    </>
  )
}
