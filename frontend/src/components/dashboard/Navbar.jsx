import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center text-white justify-between h-12 bg-teal-300 px-5'>
    {/* fetch user from use Auth to dispaly name  */}
      <p className=''>Welcome Admin</p>
      <button className='px-4 py-1 bg-teal-500 hover:bg-teal-700'>Logout</button>
    </div>
  )
}

export default Navbar
