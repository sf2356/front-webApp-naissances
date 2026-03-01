import React from 'react'
import { Outlet } from 'react-router-dom'

function PrivateLayouts() {
  return (
    <section className='border border-red-200'>
      <h2>PrivateLayouts</h2>
    <Outlet />
    </section>
  )
}

export default PrivateLayouts