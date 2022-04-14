import React, { useContext, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useAuth from './useAuth'

export default function Login(props) {
  const { user, signin } = useAuth()
  const navigate = useNavigate()
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // where to redirect to after user login
  const [search] = useSearchParams()
  const from = search.get('from')

  const submitHandler = (e) => {
    e.preventDefault()
    signin(username)

    if (from) {
      navigate(from)
    }
    else {
      navigate('/protected')
    }
  }
  return (
      <>
          <h3>Login</h3>
          {from && <p style={{color:'red'}}>Please login first</p>}
          <form onSubmit={submitHandler}>
              <label>Username: </label>
              <input type='text' value={username} onChange={e=>setUsername(e.target.value)}/><br/>
              <label>Password: </label>
              <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/><br/>
              <input type='submit' value='Login'/>
          </form>
      </>
  )
}
