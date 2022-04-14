import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
  return (
    <>
      <h1 style={{textAlign:'center'}}>My App</h1>
      <div style={{ display: 'flex' , justifyContent:'space-evenly'}}>
        <div style={{width:'30%'}}>
          <NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : 'link'} >Index</NavLink><br/>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'active-link' : 'link'}>About</NavLink><br/>
          <NavLink to='/resume' className={({ isActive }) => isActive ? 'active-link' : 'link'}>Resume</NavLink><br/>
          <NavLink to='/contactus' className={({ isActive }) => isActive ? 'active-link' : 'link'}>Contact Us</NavLink><br/><br/><hr/>
          
          <NavLink to='/nested'>Nested Example</NavLink><br />
          <NavLink to='/useNavigate'>Use Navigate</NavLink><br /><br /><hr />
          
          <NavLink to='/login' className={({ isActive }) => isActive ? 'auth-active-link' : 'auth-link'}>Login</NavLink><br />
          <NavLink to='/protected' className={({ isActive }) => isActive ? 'auth-active-link' : 'auth-link'}>Protected</NavLink><br />
          <NavLink to='/another-protected' className={({ isActive }) => isActive ? 'auth-active-link' : 'auth-link'}>Another Protected</NavLink><br />
          
        </div>
        <div style={{width:'70%'}}>
          <Outlet/>
        </div>

      </div>
    </>
  )
}
