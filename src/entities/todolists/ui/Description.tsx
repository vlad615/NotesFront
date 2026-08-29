import type { ReactNode } from 'react'

type Props = {
  description: string
  children?: ReactNode
}

export const Description = ({ description, children }: Props) => {
  return (
    <div className="flex gap-2 justify-between">
      <div className="max-w-sm">
        <p className="mt-1.5 opacity-80 text-xl">{description}</p>
      </div>
      {children}
    </div>
  )
}
