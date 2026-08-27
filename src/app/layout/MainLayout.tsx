import { Outlet } from 'react-router-dom'
import { DesktopMenu } from './ui/DesktopMenu'
import { MobileMenu } from './ui/MobileMenu'
import { useMediaQuery } from '@/shared/lib'

export const MainLayout = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <div className="min-h-dvh w-full flex flex-col justify-between">
      <div className="max-w-140 w-full mx-auto pr-2 max-md:p-2 shadow-xl flex-1">
        <div className="flex gap-2">
          {isDesktop && <DesktopMenu />}
          <div className="min-w-0 flex-1">
            <Outlet />
          </div>
        </div>
      </div>
      {!isDesktop && <MobileMenu />}
    </div>
  )
}
