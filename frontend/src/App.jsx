import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import DepartmentList from './components/department/DepartmentList'
import AddDepartment from './components/department/AddDepartment'
import Table from './leave/Table'
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
        <Route path="/admin-dashboard/leave" element={<Table />}/>
        
        
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App

