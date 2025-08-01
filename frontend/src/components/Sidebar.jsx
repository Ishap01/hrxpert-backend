import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Sidebar = ({ active = 'Dashboard' }) => {
  const menuItems = ['Dashboard', 'My profile', 'Leave', 'Salary', 'Setting'];

  return (
    <div className="bg-light p-3" style={{ height: '100vh', width: '200px' }}>
      <ul className="nav flex-column">
        {menuItems.map(item => (
          <li className="nav-item" key={item}>
            <button
              className={`btn text-start w-100 ${active === item ? 'btn-secondary' : 'btn-light'}`}
              style={{ marginBottom: '8px' }}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
