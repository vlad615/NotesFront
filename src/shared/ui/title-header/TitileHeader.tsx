import type { ReactNode } from 'react'

type Props = {
  title: string
  description?: string
  children?: ReactNode
}

export const TitleHeader = ({ title, description, children }: Props) => {
  return (
    <div className="flex justify-between items-center mb-2.5">
      <div>
        <h1 className="font-medium text-3xl mb-0.5">{title}</h1>
        <p className="text-base text-text-secondary">{description}</p>
      </div>
      {children}
    </div>
  )
}
