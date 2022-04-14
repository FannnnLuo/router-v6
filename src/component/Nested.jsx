import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Nested() {
  return (
    <>
          <h3 style={{ margin: '0px' }}>Nested Demo</h3>
          <div>
              <Link to='/nested/page1'>Page1</Link>
              <span> | </span>
              <Link style={{padding:'5px'}} to='/nested/snacks'>snacks</Link>
              <Link style={{padding:'5px'}} to='/nested/beverage'>beverage</Link>
              <hr/>
              <Outlet/>
          </div>
    </>
  )
}
