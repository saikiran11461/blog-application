import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const isAuth = useSelector((state)=>state.authReducer.isAuth);
    console.log("private route", isAuth);
    const location = useLocation()

    if(!isAuth){
        return <Navigate to='/login' replace state={{data:location.pathname}} />
    }
    
    return children
  
}

export default PrivateRoute