import { Icon } from '@/shared/ui'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import type { MenuItem } from '../menu-items'

type Props = {
  items: MenuItem[]
  dirItems?: 'row' | 'column'
  dirLink?: 'row' | 'column'
  children?: ReactNode
}

export const Menu = ({ items, dirItems = 'row', dirLink = 'row', children }: Props) => {
  return (
    <ul className={`flex w-full justify-between ${dirItems === 'column' ? 'flex-col' : 'flex-row'} md:gap-1.5`}>
      {items.map((i) => (
        <li key={i.path} className="rounded-md">
          <NavLink
            to={i.path}
            className={({ isActive }) =>
              `flex items-center rounded-md px-1.5 py-1 text-xl font-medium tracking-wider transition-colors md:gap-2 md:text-2xl ${
                dirLink === 'column' ? 'flex-col' : 'flex-row gap-2'
              } ${
                isActive
                  ? 'text-primary md:bg-primary-hover'
                  : 'text-current md:hover:bg-primary-hover hover:text-text-secondary '
              }`
            }>
            <Icon iconId={i.iconId} width="35" height="35" fill="fill-current" />
            {i.title}
          </NavLink>
        </li>
      ))}
      {children}
    </ul>
  )
}
