import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import AdminDashboard from './pages/AdminDashboard'
import DepartmentList from './components/department/DepartmentList'
import AddDepartment from './components/department/AddDepartment'
import EditDepartment from './components/department/EditDepartment'
import List from './components/employee/List'
import Add from './components/employee/Add'
import View from './components/employee/View'
import Edit from './components/employee/Edit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard"/>}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}></Route>
        <Route path="/admin-dashboard/department" element={<DepartmentList/>}/>
        <Route path="/admin-dashboard/add-department" element={<AddDepartment/>}/>
        <Route path="//admin-dashboard/department/:id" element={<EditDepartment/>}/>
         <Route path="//admin-dashboard/employee/edit/:id" element={<Edit/>}/>
        <Route path="/admin-dashboard/employees" element={<List/>}/>
        <Route path="/admin-dashboard/employee/:id" element={<View/>}/>
        <Route path="/admin-dashboard/add-employee" element={<Add/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App

