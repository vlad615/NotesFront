import { useState } from 'react'
import { defaultMenu, mainMenu } from './menu-items'
import { Menu } from './menu/Menu'
import { Icon } from '@/shared/ui'
import { LightButton } from './lightButton/LightButton'

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0" onClick={() => setIsOpen(false)}>
          <div className="fixed bottom-11 right-0 bg-background-menu p-2 rounded-2xl md:hidden">
            <div className="">
              <nav className="flex flex-col gap-2">
                {<Menu items={defaultMenu} dirItems="column" />}
                <LightButton />
              </nav>
            </div>
          </div>
        </div>
      )}
      <nav className="w-full flex items-center justify-between fixed bottom-0 left-0 py-1.5 bg-background-menu md:hidden">
        <Menu items={mainMenu} dirLink="column">
          <button type="button" onClick={() => setIsOpen((value) => !value)} className="cursor-pointer px-1.5 py-1 ">
            <Icon iconId="more" width="50" height="50" fill="fill-current" />
          </button>
        </Menu>
      </nav>
    </>
  )
}
