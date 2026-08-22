import { Link } from 'react-router-dom'
import type { TodoList } from '../'

type Props = {
  list: TodoList
}

export const TodoListCard = ({ list }: Props) => {
  return (
    <article className="p-4 border rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/todo-lists/${list.id}`}>
        <h2>{list.title}</h2>

        <p>{list.description}</p>

        <time dateTime={list.addedDate}>{list.addedDate}</time>
      </Link>
    </article>
  )
}
