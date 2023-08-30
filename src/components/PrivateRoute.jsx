import React from 'react'
import {Outlet, Navigate} from "react-router-dom"
import {useAuth} from '../hooks/useAuth'
export default function PrivateRoute() {
    const {loggedIn, checkingStatus} =useAuth();
    if(checkingStatus){
        return <h3>Loading</h3>
    }
  return loggedIn? <Outlet/>:<Navigate to ="/sign-in"/>
    
  
}
