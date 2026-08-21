import { mainMenu } from './menu-items'
import { Menu } from './menu/Menu'

export const MobileMenu = () => {
  return (
    <nav className="w-full flex items-center gap-1 fixed bottom-0 left-0 py-1.5 bg-background-menu md:hidden">
      <Menu items={mainMenu} />
    </nav>
  )
}
