import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../src/pages/Login'

export default function RootLayout() {
  return (
    <div>
        <Outlet />
    </div>
    
  )
}
