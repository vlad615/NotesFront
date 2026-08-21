import { Icon } from '@/shared/ui'
import { Menu } from './menu/Menu'
import { defaultMenu, mainMenu } from './menu-items'
import { LightButton } from './lightButton/LightButton'

export const DesktopMenu = () => {
  return (
    <aside className="max-w-26 w-full px-1 py-1.5 bg-background-menu sticky top-0 hidden h-screen shrink-0 border-r border-border shadow-xl md:flex flex-col items-start">
      <div className="flex items-center gap-1 mb-5">
        <Icon iconId="logo" width="55" height="55" fill="fill-primary" />
        <h1 className="font-bold text-4xl">To Do</h1>
      </div>

      <nav className="flex flex-1 justify-between flex-col divide-border">
        <Menu items={mainMenu} />
        <Menu items={defaultMenu} />
      </nav>
      <LightButton />
    </aside>
  )
}
