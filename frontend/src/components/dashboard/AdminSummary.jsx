import React, { useEffect, useState } from 'react'
import { FaBuilding, FaUsers } from 'react-icons/fa'
import SummaryCard from './SummaryCard'
import axios from 'axios'

const AdminSummary = () => {
  const [summary,setSummary] = useState(null)
  useEffect(()=>{
   const fetchSummary = async()=>{
    try{
 const response = await axios.get('http://localhost:5000/api/dashboard/summary',{
  headers:{
    //auth
  }
 })
 setSummary(response.data)
    }catch(error){
           console.log(error)
    }
   }
     fetchSummary();
  },[])
  if(!summary){
    return <div>Loading...</div>
  }
  return (
    <div className='p-6'>
    <h3 className='text-2xl font-bold'>DashBoard Overview</h3>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
      <SummaryCard icon ={FaUsers}
      text="Total Employees"
      number={summary.totalEmployees}
      color="bg-teal-600"
      />
      <SummaryCard icon ={FaBuilding}
      text="Total Departments"
      number={summary.totalDepartments}
      color="bg-teal-600"
      />
    
    </div>
    </div>
  )
}

export default AdminSummary
