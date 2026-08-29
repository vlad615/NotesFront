type Props = {
  label: string
  value: string
  type?: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export const InputDate = ({ type = 'datetime-local', label, value, name, onChange }: Props) => {
  return (
    <label htmlFor="startDate" className="block text-lg font-semibold text-text-secondary">
      {label}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-0.5 w-full cursor-pointer rounded-xl border border-border bg-transparent p-1.5 text-text placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-indigo-100"
      />
    </label>
  )
}
