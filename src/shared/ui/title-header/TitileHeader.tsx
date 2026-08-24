import type { ReactNode } from 'react'

type Props = {
  title: string
  description?: string
  children?: ReactNode
  wrap?: boolean
}

export const TitleHeader = ({ title, description, children, wrap = false }: Props) => {
  return (
    <div className={'flex justify-between gap-2 items-center mb-2.5'} style={{ flexWrap: wrap ? 'wrap' : 'nowrap' }}>
      <div>
        <h1 className="font-medium text-3xl mb-0.5">{title}</h1>
        <p className="text-base text-text-secondary">{description}</p>
      </div>
      {children}
    </div>
  )
}
