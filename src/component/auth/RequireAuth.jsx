import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from './useAuth'

export default function RequireAuth({ children }) {
    let { user,resetUser } = useAuth()
    if (user) {
        return children
    }
    return <Navigate to={`/login?from=${window.location.pathname}`} replace/>
    
}
