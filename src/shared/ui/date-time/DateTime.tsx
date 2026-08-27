export const DateTime = (value: string) => {
  if (!value) return '-'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return '-'

  const formated = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  })
    .format(date)
    .split(',')
  return (
    <>
      <span>{formated[0]}</span>
      <span>{formated[1]}</span>
    </>
  )
}
