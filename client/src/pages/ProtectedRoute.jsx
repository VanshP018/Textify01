import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = () => {
    // const navigate = useNavigate()
    const {user} = useContext(UserContext)
    
  return user ? <Outlet/> : <Navigate to="/login"/>
}

export default ProtectedRoute