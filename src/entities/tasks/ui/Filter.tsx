import { tabs, TaskStatus } from '@/entities/tasks'

type Props = {
  value: 'all' | TaskStatus
  onClick: (f: 'all' | TaskStatus) => void
}

export const Filter = ({ value, onClick }: Props) => {
  return (
    <nav
      className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-background-menu gap-3 border-b border-border px-2"
      aria-label="Task filters">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          type="button"
          onClick={() => onClick(tab.value)}
          className={`shrink-0 border-b-2 px-1 py-2 text-lg font-semibold transition-colors ${
            value === tab.value
              ? 'border-primary text-primary'
              : 'border-transparent text-text-secondary hover:text-text'
          }`}>
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
