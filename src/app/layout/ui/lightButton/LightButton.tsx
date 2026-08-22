import { changeThemeAC, selectTheme } from '@/app/store/'
import { useAppDispatch, useAppSelector } from '@/shared/lib'
import { Icon } from '@/shared/ui'

export const LightButton = () => {
  const theme = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()

  const isDark = theme === 'dark'

  const handleToggleTheme = () => {
    dispatch(changeThemeAC({ themeMode: isDark ? 'light' : 'dark' }))
  }

  return (
    <button
      type="button"
      onClick={handleToggleTheme}
      aria-label="Toggle theme"
      className="flex items-center gap-2.5 px-2 py-1.5 mt-1.5 text-xl md:text-2xl font-medium cursor-pointer rounded-full border border-border bg-surface">
      <Icon iconId={isDark ? 'dark' : 'light'} width="35" height="35" fill="fill-current" />
      {isDark ? 'Dark' : 'Light'}
    </button>
  )
}
