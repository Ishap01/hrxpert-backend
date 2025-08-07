import React from 'react'
import { useNavigate } from 'react-router-dom'
import NotificationPanel from './NotificationPanel';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='mt-0 flex items-center text-white h-14 bg-teal-300 px-5 shadow-md mb-10 sticky top-0'>

      <p className='text-lg font-semibold'>Welcome Admin</p>

     
      <div className='ml-auto flex items-center gap-4'>
        <NotificationPanel />
        <button
          className='px-4 py-1 bg-teal-500 hover:bg-teal-700 rounded'
          onClick={() => navigate("/")}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar

