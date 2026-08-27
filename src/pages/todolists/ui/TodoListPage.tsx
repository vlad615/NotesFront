import { useParams } from 'react-router-dom'
import { useAppSelector, useMediaQuery } from '@/shared/lib'
import { selectLists } from '@/entities/todolists'
import { MobileTasksList, TasksList } from '@/widgets/tasks'
import { CradHeader } from '@/entities/todolists/ui/CardHeader'
import { EditDelete } from '@/features/todolists'

export const TodolistPage = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const { todosId } = useParams()
  const todolist = useAppSelector(selectLists).find((list) => list.id === todosId)

  if (!todolist) {
    return <p>TodoList not found</p>
  }
  return (
    <div className="w-full md:py-1.5 ">
      <CradHeader large title={todolist.title} color={todolist.color} addedDate={todolist.addedDate}>
        <EditDelete
          todolistId={todosId ?? ''}
          large
          back
          title={todolist.title}
          color={todolist.color}
          description={todolist.description}
        />
      </CradHeader>
      {isDesktop && <TasksList todolistId={todolist.id} />}
      {!isDesktop && <MobileTasksList todolistId={todolist.id} />}
    </div>
  )
}
