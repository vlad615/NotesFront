import { TodoListCard, selectLists } from '@/entities/todolists'
import { useAppSelector } from '@/shared/hooks/useAppSelector'

export const TodosLists = () => {
  const todosLists = useAppSelector(selectLists)
  return (
    <div>
      {todosLists.map((todolist) => (
        <TodoListCard key={todolist.id} list={todolist} />
      ))}
    </div>
  )
}
