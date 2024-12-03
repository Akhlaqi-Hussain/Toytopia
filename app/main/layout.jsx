import React from 'react'
import Sidebar from '../components/Sidebar'

const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className='flex-1 mt-24 p-4 md:ml-64'>
        {children}
        </main>
    </div>
  )
}

export default MainLayout