import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuth} from '../context/authContext'
import { useNavigate } from 'react-router-dom';

const EmployeeDashboard = () => {
  const username = 'Aditya';
  const {user,loading} = useAuth()
  const navigate = useNavigate()
  if(loading){
    return <div>Loading...</div>
  }
  if(!user){
    navigate('login')
  }

  return (
    <>
      <Navbar username={username} />
      <div className="d-flex">
        <Sidebar active="Dashboard" />
        <div className="p-4 w-100" style={{ backgroundColor: '#e6e6e6', minHeight: '90vh' }}>
          <div className="bg-white p-3 d-flex align-items-center" style={{ maxWidth: '400px' }}>
            <i className="bi bi-people-fill fs-1 text-secondary me-3"></i>
            <div>
              <div>Welcome Back</div>
              <strong>{username}</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboard;
