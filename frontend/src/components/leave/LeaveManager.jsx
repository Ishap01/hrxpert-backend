// components/leave/LeaveManager.jsx
import React from "react";

const LeaveManager = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Leave Management
      </h2>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <form className="space-y-4">
          <div>
            <label className="block font-medium mb-1 text-gray-700">Employee:</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Select Employee</option>
              <option>John Doe</option>
              <option>Jane Smith</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">Leave Type:</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Select Leave Type</option>
              <option>Casual Leave</option>
              <option>Sick Leave</option>
              <option>Earned Leave</option>
            </select>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-medium mb-1 text-gray-700">From Date:</label>
              <input type="date" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="flex-1">
              <label className="block font-medium mb-1 text-gray-700">To Date:</label>
              <input type="date" className="w-full border border-gray-300 p-2 rounded" />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">Reason:</label>
            <textarea className="w-full border border-gray-300 p-2 rounded" rows="3" placeholder="Enter reason..." />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Apply Leave
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeaveManager;
