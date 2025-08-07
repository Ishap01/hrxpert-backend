import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import EmployeeNotifications from './employeeDashboard/EmployeeNotificationPanel';


const Navbar = ({ username }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#4b9fa5' }}>
      <div className="container-fluid justify-content-between">
        <span className="navbar-brand mb-0 h5">
          <i className="bi bi-person-circle"></i> Welcome, {username}
        </span>
        <button className="btn btn-dark">Logout</button>
    <EmployeeNotifications/>
      </div>
    </nav>
  );
};

export default Navbar;