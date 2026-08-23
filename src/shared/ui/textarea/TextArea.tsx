type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  lable: string
  required?: boolean
}

export const TextArea = ({ lable, required, value, onChange, placeholder, rows, name }: Props) => {
  return (
    <label htmlFor={lable} className="block text-lg font-semibold text-text-secondary">
      {lable}: {required && <span className="text-red-500">*</span>}
      <textarea
        id={name}
        name={name}
        value={value}
        rows={rows}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-0.5 w-full resize-none rounded-xl border border-border bg-transparent p-1.5 text-text placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-indigo-100"
      />
    </label>
  )
}
