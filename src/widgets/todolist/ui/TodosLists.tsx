import { TodoListCard, selectLists } from '@/entities/todolists'
import { useAppSelector } from '@/shared/lib/useAppSelector'

export const TodosLists = () => {
  const todosLists = useAppSelector(selectLists)

  return (
    <div className="flex gap-2 flex-wrap items-start">
      {todosLists.map((todolist) => (
        <TodoListCard key={todolist.id} list={todolist} />
      ))}
    </div>
  )
}
