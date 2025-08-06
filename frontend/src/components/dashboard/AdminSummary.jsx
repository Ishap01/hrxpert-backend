import React, { useEffect, useState } from 'react'
import {
  FaBuilding,
  FaMoneyBill,
  FaUsers
} from 'react-icons/fa'
import SummaryCard from './SummaryCard'
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts'
import axios from 'axios'

const AdminSummary = () => {
  const [summary, setSummary] = useState(null)

  const leaveTypeData = [
    { type: 'Sick Leave', count: 5 },
    { type: 'Casual Leave', count: 3 },
    { type: 'Earned Leave', count: 2 }
  ]

  const leaveStatusData = [
    { name: 'Pending', value: 4 },
    { name: 'Approved', value: 6 },
    { name: 'Rejected', value: 3 }
  ]

  const COLORS = ['#14b8a6', '#facc15', '#f87171'] 

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/dashboard/summary')
        setSummary(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchSummary()
  }, [])

  if (!summary) {
    return <div className="text-center mt-10">Loading Dashboard...</div>
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen font-sans">
      <h3 className="text-3xl font-bold text-teal-700 text-center mb-10">Admin Dashboard Overview</h3>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <SummaryCard
          icon={FaUsers}
          text="Total Employees"
          number={summary.totalEmployees}
          color="bg-teal-500"
        />
        <SummaryCard
          icon={FaBuilding}
          text="Departments"
          number={summary.totalDepartments}
          color="bg-blue-300"
        />
        <SummaryCard
          icon={FaMoneyBill}
          text="Monthly Pay"
          number={`$${summary.totalSalary}`}
          color="bg-red-400"
        />
      </div>

      {/* Leave Overview */}
      <h4 className="text-2xl font-semibold text-teal-700 mb-6 text-center">Leave Overview</h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart for Leave Type */}
        <div className="bg-white rounded-xl shadow p-4">
          <h5 className="text-lg font-semibold text-center mb-4">Leave Type Distribution</h5>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={leaveTypeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count">
                {leaveTypeData.map((entry, index) => (
                  <Cell key={`bar-cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart for Leave Status */}
        <div className="bg-white rounded-xl shadow p-4">
          <h5 className="text-lg font-semibold text-center mb-4">Leave Status Overview</h5>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={leaveStatusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {leaveStatusData.map((entry, index) => (
                  <Cell key={`pie-cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default AdminSummary
