import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
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

function AppWrapper() {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  const isAdmin = user?.role === 'admin';

  const isAdminRoute = /^\/admin-dashboard(\/.*)?$/.test(location.pathname);

  const hideSidebarPaths = ['/', '/login'];
  const shouldHideSidebar = hideSidebarPaths.includes(location.pathname);

  return (
    <div style={{ display: 'flex' }}>
    <AdminSidebar />

      <div
        style={{
          flex: 1,
          marginLeft: token && isAdmin && isAdminRoute && !shouldHideSidebar ? '220px' : '0',
          padding: '20px',
        }}
      >
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

          {/* Admin Dashboard + Child Routes */}
          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/department"
            element={
              <PrivateRoute>
                <DepartmentList />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/add-department"
            element={
              <PrivateRoute>
                <AddDepartment />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/department/:id"
            element={
              <PrivateRoute>
                <EditDepartment />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/employees"
            element={
              <PrivateRoute>
                <List />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/add-employee"
            element={
              <PrivateRoute>
                <Add />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/employee/:id"
            element={
              <PrivateRoute>
                <View />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/employee/edit/:id"
            element={
              <PrivateRoute>
                <Edit />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/attendance"
            element={
              <PrivateRoute>
                <AttendanceManager />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/leave"
            element={
              <PrivateRoute>
                <LeaveManager />
              </PrivateRoute>
            }
          />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
