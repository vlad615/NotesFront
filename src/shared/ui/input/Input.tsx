import type { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  lable: string
  required?: boolean
}

export const Input = ({ lable, required, value, onChange, placeholder, name }: Props) => {
  return (
    <label htmlFor={lable} className="block text-lg font-semibold text-text-secondary">
      {lable}: {required && <span className="text-red-500">*</span>}
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-0.5 w-full rounded-xl border border-border bg-transparent p-1.5 text-text placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-indigo-100"
      />
    </label>
  )
}
