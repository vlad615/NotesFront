import type { TodoList } from '../'

type TodoListCardProps = {
  list: TodoList
}

export const TodoListCard = ({ list }: TodoListCardProps) => {
  return (
    <article>
      <h2>{list.title}</h2>

      <p>{list.description}</p>

      <time dateTime={list.addedDate}>{list.addedDate}</time>
    </article>
  )
}
