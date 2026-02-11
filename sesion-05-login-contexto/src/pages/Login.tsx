import React, { use } from 'react'
import { useAuth } from '../context/AuthContext'

const Login = () => {
    const {login} = useAuth();
  return (
    <div>Login</div>
  )
}

export default Login