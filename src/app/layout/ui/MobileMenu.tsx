import { useRef, useState } from 'react'
import { mobDefault, mobMenu } from './menu-items'
import { Menu } from './menu/Menu'
import { Icon } from '@/shared/ui'
import { LightButton } from './lightButton/LightButton'
import { useClickOutside } from '@/shared/lib'

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const addmenuRef = useRef<HTMLDivElement>(null)

  useClickOutside(addmenuRef, () => setIsOpen(false))

  return (
    <>
      {isOpen && (
        <nav
          ref={addmenuRef}
          className="fixed bottom-11 z-50 right-0 bg-background-menu p-2 rounded-2xl md:hidden flex flex-col gap-2">
          {<Menu items={mobDefault} dirItems="column" />}
          <LightButton />
        </nav>
      )}
      <nav className="w-full flex items-center justify-between py-1.5 px-2 bg-background-menu md:hidden">
        <Menu items={mobMenu} dirLink="column">
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="cursor-pointer hover:text-text-secondary">
            <Icon iconId="more" width="50" height="50" fill="fill-current" />
          </button>
        </Menu>
      </nav>
    </>
  )
}
