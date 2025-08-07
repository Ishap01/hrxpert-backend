import React from 'react'
import {NavLink} from 'react-router-dom'
import {FaBuilding, FaCalendarAlt,FaClipboardList, FaCogs,FaFilePdf, FaMoneyBillWave, FaTachometerAlt, FaUser} from "react-icons/fa"
import { useAuth } from '../../context/authContext'
const Sidebar = () => {
  const {user} = useAuth();
  return (
    <div className='bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64'>
      <div className='bg-teal-400 h-12 flex items-center justify-center'>
        <h3 className='text-2xl font-pecific text-center'>HRXpert</h3>
      </div>
      
    <div >
        <NavLink to="/employee-dashboard" end className={({ isActive }) =>`${isActive ? "bg-teal-300" : ""} text-white no-underline flex items-center space-x-4 py-2.5 px-4 rounded`}>
         <FaTachometerAlt />
        <span>Dashboard</span>
       </NavLink>
        <NavLink to={`/employee-dashboard/myprofile/${user._id}`} className={({ isActive }) =>`${isActive ? "bg-teal-300" : ""} text-white no-underline flex items-center space-x-4 py-2.5 px-4 rounded`}>
          <FaUser /> 
          <span>My Profile</span>
        </NavLink>
         <NavLink to="/employee-dashboard/leave" className={({ isActive }) =>`${isActive ? "bg-teal-300" : ""} text-white no-underline  flex items-center space-x-4 py-2.5 px-4 rounded`}>
          <FaClipboardList/> 
          <span>Leave</span>
        </NavLink>
        <NavLink to="employee-dashboard/salary" className={({ isActive }) =>`${isActive ? "bg-teal-300" : ""} text-white no-underline flex items-center space-x-4 py-2.5 px-4 rounded`}>
          <FaMoneyBillWave/> 
          <span>Salary</span>
        </NavLink>
         <NavLink to="/employee-dashboard/payslip" className={({ isActive }) =>`${isActive ? "bg-teal-300" : ""} text-white no-underline flex items-center space-x-4 py-2.5 px-4 rounded`}>
                  <FaMoneyBillWave/> 
                  <span>PayslipDownload</span>
        </NavLink>
         <NavLink to="employee-dashboard/document" className={({ isActive }) =>`${isActive ? "bg-teal-300" : ""} text-white no-underline flex items-center space-x-4 py-2.5 px-4 rounded`}>
          <FaFilePdf/> 
          <span>Documents</span>
        </NavLink>
        
    </div>
    </div>
  )
}

export default Sidebar

