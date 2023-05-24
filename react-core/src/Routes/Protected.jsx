import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({isLogedin,children}) => {
    if (!isLogedin) return <Navigate to="/" replace />
    return children;
}

export default Protected
