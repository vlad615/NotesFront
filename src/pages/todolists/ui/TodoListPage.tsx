import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/shared/lib'
import { selectLists } from '@/entities/todolists'
import { TasksList } from '@/widgets/tasks'
import { CradHeader } from '@/entities/todolists/ui/card-header/CardHeader'
import { EditDelete } from '@/features/todolists'

export const TodolistPage = () => {
  const { todosId } = useParams()
  const todolist = useAppSelector(selectLists).find((list) => list.id === todosId)

  if (!todolist) {
    return <p>TodoList not found</p>
  }
  return (
    <div className="w-full md:py-1.5">
      <CradHeader large title={todolist.title} color={todolist.color} addedDate={todolist.addedDate}>
        <EditDelete large />
      </CradHeader>
      <TasksList todolistId={todolist.id} />
    </div>
  )
}
