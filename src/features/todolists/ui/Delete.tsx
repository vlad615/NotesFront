import { useAppDispatch } from '@/shared/lib/'
import { deleteTodolistAC } from '@/entities/todolists'
import { useNavigate } from 'react-router-dom'

type Props = {
  todolistId: string
  back?: boolean
}

export const Delete = ({ todolistId, back }: Props) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  function handlerDelete() {
    dispatch(deleteTodolistAC({ id: todolistId }))
    if (back) navigate(-1)
  }
  return (
    <li className="cursor-pointer px-2 py-1 hover:bg-background-menu" onClick={handlerDelete}>
      Delete
    </li>
  )
}
