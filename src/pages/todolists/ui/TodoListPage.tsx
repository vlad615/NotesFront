import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/shared/lib'
import { selectLists, TodoListCard } from '@/entities/todolists'
import { TasksList } from '@/widgets/tasks'

export const TodolistPage = () => {
  const { todosId } = useParams()
  const todolist = useAppSelector(selectLists).find((list) => list.id === todosId)

  if (!todolist) {
    return <p>TodoList not found</p>
  }
  return (
    <>
      <TodoListCard list={todolist} />
      <TasksList todolistId={todolist.id} />
    </>
  )
}
