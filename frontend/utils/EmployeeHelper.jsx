 import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// DataTable columns
export const columns = [
  {
    name: "S No",
    selector: (row) => row.sno,
    width: "70px"
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable:"true",
    width:"100px"
  },
  {
    name: "Image",
    selector: (row) => row.profileimage,
    width:"90px"
  },
  {
    name: "Department",
    selector: (row) => row.dep_name,
    width:"120px"
  },
  {
    name: "DOB",
    selector: (row) => row.dob,
    sortable:"true",
    width:"130px"
  },
  {
    name: "Action",
    selector: (row) => row.action,
    center:"true"
  }
]

// Fetch departments
export const fetchDepartments = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/department')
    if (response.data.success) {
      return response.data.departments
    }
  } catch (error) {
    alert(error?.response?.data?.error || "Department fetch failed")
  }
}

// Action buttons
export const EmployeeButton = ({ _id }) => {
  const navigate = useNavigate()

  return (
    <div className="flex space-x-3">
      <button className="px-3 py-1 mx-2 bg-teal-600 text-white text-sm rounded"
        onClick={() => navigate(`/admin-dashboard/employee/${_id}`)}>
        View
      </button>
      <button className="px-2 py-1 mx-2 bg-green-600 text-white text-sm rounded"
        onClick={() => navigate(`/admin-dashboard/employee/edit/${_id}`)}>
        Edit
      </button>
      <button className="px-2 py-1 mx-2 bg-yellow-600 text-white text-sm rounded"
        onClick={() => navigate(`/admin-dashboard/employee/salary/${_id}`)}>
        Salary
      </button>
      <button className="px-2 py-1 mx-2 bg-blue-600 text-white text-sm rounded"
        onClick={() => navigate(`/admin-dashboard/employee/leave/${_id}`)}>
        Leave
      </button>
    </div>
  )
}
