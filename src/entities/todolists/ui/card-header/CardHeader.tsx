import { Icon } from '@/shared/ui'
import { type ReactNode } from 'react'

type Props = {
  title: string
  color: string
  addedDate: string
  large?: boolean
  children?: ReactNode
}

export const CradHeader = ({ title, color, addedDate, large, children }: Props) => {
  return (
    <>
      <div className="flex gap-1.5 justify-between items-start">
        <div className="flex gap-1 items-start">
          <div className="relative px-1 py-2 md:p-0.5">
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-xl md:opacity-10"
              style={{ backgroundColor: color }}
            />
            <Icon
              iconId="folder"
              width={large ? '50px' : ''}
              height={large ? '50px' : ''}
              fill="hidden md:block"
              style={{ fill: color }}
            />
          </div>
          <div>
            <h2 className={large ? 'font-bold text-4xl' : 'font-semibold text-2xl'}>{title}</h2>
            <time
              dateTime={addedDate}
              className={large ? 'text-text-secondary text-lg' : 'text-text-secondary text-xs'}>
              Created: {addedDate}
            </time>
          </div>
        </div>

        {children}
      </div>
    </>
  )
}
