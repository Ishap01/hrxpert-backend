import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import DepartmentList from './components/department/DepartmentList'
import AddDepartment from './components/department/AddDepartment'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      App
      
    </>
  )
}

export default App

