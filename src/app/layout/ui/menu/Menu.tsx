import { Icon } from '@/shared/ui'
import { NavLink } from 'react-router-dom'
import type { MenuItem } from '../menu-items'

type Props = {
  items: MenuItem[]
}

export const Menu = ({ items }: Props) => {
  return (
    <ul className="flex justify-between w-full md:flex-col md:gap-1.5 ">
      {items.map((i) => (
        <li key={i.path} className="rounded-md">
          <NavLink
            to={i.path}
            className={({ isActive }) =>
              `flex flex-col md:flex-row items-center md:gap-2 rounded-md px-1.5 py-1 text-base md:text-2xl font-medium tracking-wider transition-colors ${
                isActive
                  ? 'md:bg-primary-hover text-primary'
                  : 'text-current md:hover:bg-primary-hover hover:text-white'
              }`
            }>
            <Icon iconId={i.iconId} width="35" height="35" fill="fill-current" />
            {i.title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
