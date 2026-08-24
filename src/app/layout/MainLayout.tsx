import { Outlet } from 'react-router-dom'
import { DesktopMenu } from './ui/DesktopMenu'
import { MobileMenu } from './ui/MobileMenu'

export const MainLayout = () => {
  return (
    <div className="min-h-dvh w-full flex flex-col justify-between">
      <div className="max-w-140 w-full mx-auto pr-2 max-md:p-2 shadow-xl flex-1">
        <div className="flex gap-2">
          <DesktopMenu />
          <Outlet />
        </div>
      </div>
      <MobileMenu />
    </div>
  )
}
