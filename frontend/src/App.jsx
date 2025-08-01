import { Navigate, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
 import Login from './pages/Login';
 import EmployeeDashboard from './pages/EmployeeDashboard';

import Login from './pages/Login';

import AdminDashboard from './pages/AdminDashboard'
import DepartmentList from './components/department/DepartmentList'
import AddDepartment from './components/department/AddDepartment'
import EditDepartment from './components/department/EditDepartment'
import List from './components/employee/List'
import Add from './components/employee/Add'
import View from './components/employee/View'
import Edit from './components/employee/Edit'
import AdminSidebar from './components/dashboard/AdminSidebar'
import AttendanceManager from './components/attendance/AttendanceManager'
import LeaveManager from './components/leave/LeaveManager'

function App() {
  const [count, setCount] = useState(0)

function App() {
  return (
    <>
      <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <AdminSidebar />
        <div style={{ marginLeft: '256px', flex: 1 }}>
      <Routes>
        
        <Route path="/" element={<Navigate to="/admin-dashboard"/>}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}></Route>
        <Route path="/admin-dashboard/department" element={<DepartmentList/>}/>
        <Route path="/admin-dashboard/add-department" element={<AddDepartment/>}/>

        <Route path="/admin-dashboard/department/:id" element={<EditDepartment/>}/>
        <Route path="/admin-dashboard/employee/edit/:id" element={<Edit/>}/>
        <Route path="/admin-dashboard/employees" element={<List/>}/>
        <Route path="/admin-dashboard/employee/:id" element={<View/>}/>
        <Route path="/admin-dashboard/add-employee" element={<Add/>}/>
        <Route path="/admin-dashboard/attendance" element={<AttendanceManager />} />
        <Route path="/admin-dashboard/leave" element={<LeaveManager />} />
        


      </Routes>
      </div>
      </div>
      </BrowserRouter>
      
    </>
  )
}

export default App;
