import { AddTodo } from '@/features/todolists/ui/AddTodo'
import { TitleHeader } from '@/shared/ui/'
import { TodosLists } from '@/widgets/todolist/'

export const TodolistsPage = () => {
  return (
    <div className="container">
      <TitleHeader title="My to do lists" wrap description="Manage your to-do lists and create new">
        <AddTodo />
      </TitleHeader>
      <TodosLists />
    </div>
  )
}
