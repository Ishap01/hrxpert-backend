import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuth} from '../../context/authContext'
import EmployeeNotifications from './EmployeeNotificationPanel';

const Navbar = ({username}) => {
  const navigate = useNavigate();
  const {user} = useAuth();
  return (
    <div className=' flex items-center text-white justify-between h-12 bg-teal-400 px-5 w-full'>
     
      <p>Welcome, {user.name}</p>
      <div className='ml-auto flex items-center gap-4'>
      <EmployeeNotifications/>
      <button className='px-4 py-1 bg-teal-500 hover:bg-teal-700' onClick={() => navigate("/")}>Logout</button>
    </div>
    </div>
  )
}

export default Navbar;
