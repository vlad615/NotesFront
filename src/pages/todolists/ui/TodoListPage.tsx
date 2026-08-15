import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/shared/hooks/'
import { selectLists, TodoListCard } from '@/entities/todolists'

export const TodolistPage = () => {
  const { todosId } = useParams()
  const todolist = useAppSelector(selectLists).find((list) => list.id === todosId)

  return <>{todolist ? <TodoListCard list={todolist} /> : <p>TodoList not found</p>}</>
}
