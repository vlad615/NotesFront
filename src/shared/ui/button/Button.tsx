import type { ReactNode } from 'react'

type Props = {
  bg: string
  border: string
  onClick: () => void
  children: ReactNode
}

export const Button = ({ bg, onClick, children, border }: Props) => {
  return (
    <button
      onClick={onClick}
      className={
        `flex gap-1 items-center px-1.5 py-1 text-white font-medium text-base cursor-pointer border rounded-md ` +
        bg +
        ' hover:bg-transparent hover:text-primary border-' +
        border
      }>
      {children}
    </button>
  )
}
