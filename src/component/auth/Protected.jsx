import React from 'react'
import useAuth from './useAuth'

export default function Protected() {
  const { user, signout } = useAuth()
  return (
    <>
      <h2 style={{ margin: '0px', color: 'blue' }}>Protected Page</h2>
      <h4>Welcome {user.username}</h4>
      <button onClick={()=>signout()}>Signout</button>
    </>
  )
}
