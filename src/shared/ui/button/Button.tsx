import type { ButtonHTMLAttributes, CSSProperties } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string
  filled?: boolean
  primary?: boolean
}

export function Button({
  color,
  filled = false,
  primary = false,
  className = '',
  style,
  type = 'button',
  children,
  ...rest
}: ButtonProps) {
  const resolvedColor = primary ? 'var(--color-primary)' : (color ?? 'var(--color-primary)')
  const buttonStyle = { ...style, '--btn-color': resolvedColor } as CSSProperties

  const variantClasses = filled
    ? 'bg-(--btn-color) text-white hover:bg-transparent hover:text-(--btn-color)'
    : 'bg-transparent text-(--btn-color) hover:bg-(--btn-color) hover:text-white'

  return (
    <button
      type={type}
      style={buttonStyle}
      className={[
        'flex items-center justify-center gap-2 rounded-lg cursor-pointer border-2 border-(--btn-color)',
        'px-1.5 py-1 text-base hover:scale-110 font-medium transition-all duration-300',
        'disabled:pointer-events-none disabled:opacity-50',
        variantClasses,
        className,
      ].join(' ')}
      {...rest}>
      {children}
    </button>
  )
}
