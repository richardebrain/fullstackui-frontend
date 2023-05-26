import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='flex-1 bg-white rounded-l-3xl p-10 text-black'>
      <Outlet />
    </div>
  )
}

export default DashboardLayout