import { Navigate, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
 import Login from './pages/Login';
 import EmployeeDashboard from './pages/EmployeeDashboard';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/EmployeeDashboard" element={<EmployeeDashboard />} />
      </Routes>
  );
}

export default App;
