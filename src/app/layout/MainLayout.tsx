import { Outlet } from 'react-router-dom'
import { DesktopMenu } from './ui/DesktopMenu'
import { MobileMenu } from './ui/MobileMenu'

export const MainLayout = () => {
  return (
    <div className="container">
      <div className="md:flex">
        <DesktopMenu />
        <MobileMenu />
        <Outlet />
      </div>
    </div>
  )
}
