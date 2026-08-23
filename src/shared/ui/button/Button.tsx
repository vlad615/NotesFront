import type { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  bg: string
  border: string
  filled?: boolean
}

export const Button = ({ bg, onClick, children, border, filled, type }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex gap-1 items-center px-1.5 py-1 text-white font-medium text-base cursor-pointer border rounded-md ${
        filled ? bg : 'bg-transparent'
      } ${border} hover:${filled ? 'bg-transparent' : bg} hover:${filled ? 'text-primary' : 'text-white'}`}>
      {children}
    </button>
  )
}
