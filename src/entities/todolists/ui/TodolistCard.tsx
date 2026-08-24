import { Link } from 'react-router-dom'
import type { TodoList } from '../'
import { CradHeader } from './card-header/CardHeader'
import { Icon } from '@/shared/ui'

type Props = {
  list: TodoList
}

export const TodoListCard = ({ list }: Props) => {
  return (
    <article className="min-w-2xs lg:max-w-md flex-1 bg-surface rounded-md shadow-md hover:shadow-lg hover:scale-102 transition-all duration-300">
      <div className="p-1.5">
        <CradHeader title={list.title} color={list.color} addedDate={list.addedDate} />
        <p className="mt-2 text-lg">{list.description}</p>
      </div>
      <Link
        to={`/todo-lists/${list.id}`}
        className="w-full gap-0.5 hover:bg-primary-light bg-background-menu border-t border-border shadow-lg cursor-pointer text-primary font-medium text-lg rounded-b-md py-1.5 flex items-center justify-center">
        Tasks
        <Icon iconId="arrow" fill="fill-current" />
      </Link>
    </article>
  )
}
