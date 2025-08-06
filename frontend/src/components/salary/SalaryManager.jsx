import React, { useState } from 'react';

const SalaryManager = () => {
  const [formData, setFormData] = useState({
    department: '',
    employee: '',
    basicSalary: '',
    allowance: '',
    deduction: '',
    payDate: ''
  });

  const [salaryHistory, setSalaryHistory] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddSalary = () => {
    const total =
      parseFloat(formData.basicSalary || 0) +
      parseFloat(formData.allowance || 0) -
      parseFloat(formData.deduction || 0);

    const newRecord = {
      sno: salaryHistory.length + 1,
      empId: formData.employee,
      salary: formData.basicSalary,
      allowance: formData.allowance,
      deduction: formData.deduction,
      total: total,
      payDate: formData.payDate
    };

    setSalaryHistory([...salaryHistory, newRecord]);
    setFormData({
      department: '',
      employee: '',
      basicSalary: '',
      allowance: '',
      deduction: '',
      payDate: ''
    });
  };

  const filteredHistory = salaryHistory.filter((entry) =>
    entry.empId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add New Salary</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block font-semibold">Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Department</option>
            <option value="HR">HR</option>
            <option value="Tech">Tech</option>
            <option value="Finance">Finance</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Employee</label>
          <select
            name="employee"
            value={formData.employee}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Employee</option>
            <option value="yousaf222">yousaf222</option>
            <option value="neeti001">neeti001</option>
            <option value="isha004">isha004</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Basic Salary</label>
          <input
            type="number"
            name="basicSalary"
            value={formData.basicSalary}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Insert Salary"
          />
        </div>

        <div>
          <label className="block font-semibold">Allowances</label>
          <input
            type="number"
            name="allowance"
            value={formData.allowance}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Monthly Allowances"
          />
        </div>

        <div>
          <label className="block font-semibold">Deductions</label>
          <input
            type="number"
            name="deduction"
            value={formData.deduction}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Monthly Deductions"
          />
        </div>

        <div>
          <label className="block font-semibold">Pay Date</label>
          <input
            type="date"
            name="payDate"
            value={formData.payDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <button
        onClick={handleAddSalary}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Add Salary
      </button>

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Salary History</h2>
        <input
          type="text"
          placeholder="Search By Emp ID"
          className="mb-4 p-2 border rounded w-64"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">SNO</th>
              <th className="border px-4 py-2">EMP ID</th>
              <th className="border px-4 py-2">SALARY</th>
              <th className="border px-4 py-2">ALLOWANCE</th>
              <th className="border px-4 py-2">DEDUCTION</th>
              <th className="border px-4 py-2">TOTAL</th>
              <th className="border px-4 py-2">PAY DATE</th>
            </tr>
          </thead>
          <tbody>
            {filteredHistory.map((entry) => (
              <tr key={entry.sno}>
                <td className="border px-4 py-2">{entry.sno}</td>
                <td className="border px-4 py-2">{entry.empId}</td>
                <td className="border px-4 py-2">{entry.salary}</td>
                <td className="border px-4 py-2">{entry.allowance}</td>
                <td className="border px-4 py-2">{entry.deduction}</td>
                <td className="border px-4 py-2">{entry.total}</td>
                <td className="border px-4 py-2">{entry.payDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalaryManager;
