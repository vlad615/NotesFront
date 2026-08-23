import { colors } from '../model/types'
import { Icon } from '@/shared/ui'

type Props = {
  current: string
  onClick: (color: string) => void
}

export const Colors = ({ current, onClick }: Props) => {
  return (
    <label className="block text-lg font-semibold text-text-secondary">
      Color:
      <ul className="flex items-center gap-3 mt-2">
        {colors.map((color) => {
          const isSelected = current == color
          return (
            <li
              key={color}
              onClick={() => onClick(color)}
              className={`flex items-center justify-center text-white h-3.5 w-3.5 cursor-pointer rounded-lg transition-all`}
              style={{ backgroundColor: color, boxShadow: isSelected ? `0 0 15px ${color}` : 'none' }}>
              {isSelected && <Icon iconId="checked" fill="fill-current" />}
            </li>
          )
        })}
      </ul>
    </label>
  )
}
