import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
  const isAuth = true
  return isAuth ? <Outlet /> : <Navigate to="/error" />
}
