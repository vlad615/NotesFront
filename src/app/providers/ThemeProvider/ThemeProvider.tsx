import { useEffect, type ReactNode } from 'react'
import { useAppSelector } from '@/shared/lib/useAppSelector'
import { selectTheme } from '@/app/store/app-slice'

type Props = {
  children: ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  const theme = useAppSelector(selectTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'dark')
  }, [theme])

  return children
}
