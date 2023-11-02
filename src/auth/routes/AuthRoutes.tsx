import { Navigate, Route, Routes } from 'react-router-dom'
import {LoginPage} from '../pages/LoginPage'
import {ForgotPasswordPage} from '../pages/ForgotPasswordPage'
import React from 'react'

export const AuthRoutes= ()=> {
  return (
    <Routes>
        <Route path='login' element={<LoginPage />}/>
        <Route path='forgot-pwd' element={<ForgotPasswordPage />}/>
        <Route path='/*' element={<Navigate to="/auth/login" />}/>
    </Routes>
  )
}

export default AuthRoutes
