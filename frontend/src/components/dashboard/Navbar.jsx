import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='mt-0 flex items-center text-white justify-between h-16 bg-teal-300 px-5 '>
    {/* fetch user from use Auth to dispaly name  */}
      <p className=''>Welcome Admin</p>
      <button className='px-4 py-1 bg-teal-500 hover:bg-teal-700' onClick={() => navigate("/")}>Logout</button>
    </div>
  )
}

export default Navbar
