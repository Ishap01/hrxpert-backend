import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
 import Login from './pages/Login';
 import { Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
