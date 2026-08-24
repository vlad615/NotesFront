import { AddTodo } from '@/features/todolists/ui/AddTodo'
import { TitleHeader } from '@/shared/ui/'
import { TodosLists } from '@/widgets/todolist/'

export const TodolistsPage = () => {
  return (
    <div className="w-full md:py-1.5 md:pl-2.5">
      <TitleHeader title="My to do lists" description="Manage your to-do lists and create new">
        <AddTodo />
      </TitleHeader>
      <TodosLists />
    </div>
  )
}
