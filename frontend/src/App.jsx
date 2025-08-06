import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import EmployeeDashboard from './pages/EmployeeDashboard';
import AdminDashboard from './pages/AdminDashboard';

import DepartmentList from './components/department/DepartmentList';
import AddDepartment from './components/department/AddDepartment';
import EditDepartment from './components/department/EditDepartment';

import List from './components/employee/List';
import Add from './components/employee/Add';
import View from './components/employee/View';
import Edit from './components/employee/Edit';

import AttendanceManager from './components/attendance/AttendanceManager';
import LeaveManager from './components/leave/LeaveManager';

import AdminSidebar from './components/dashboard/AdminSidebar';
import PrivateRoute from '../utils/PrivateRoutes';
import SalaryManager from './components/salary/SalaryManager'
import ViewSalary from './components/salary/ViewSalary';
import PayslipDownload from './components/PayslipDownload';
// Admin layout component directly in this file
const AdminLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <AdminSidebar />
      <div style={{ marginLeft: '220px', padding: '20px', flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Employee Route */}
        <Route
          path="/employee-dashboard"
          element={
            <PrivateRoute>
              <EmployeeDashboard />
            </PrivateRoute>
          }
        />

        {/* Admin Routes with Sidebar Layout */}
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="department" element={<DepartmentList />} />
          <Route path="add-department" element={<AddDepartment />} />
          <Route path="department/:id" element={<EditDepartment />} />
          <Route path="employees" element={<List />} />
          <Route path="add-employee" element={<Add />} />
          <Route path="employee/:id" element={<View />} />
          <Route path="employee/edit/:id" element={<Edit />} />
          <Route path="attendance" element={<AttendanceManager />} />
          <Route path="leave" element={<LeaveManager />} />
           <Route path="/admin-dashboard/salary" element={<SalaryManager />} />
            <Route path="/admin-dashboard/employee/salary/:id" element={<ViewSalary />} />
            <Route path="/admin-dashboard/payslip" element={<PayslipDownload />} />
           
        </Route>

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}
