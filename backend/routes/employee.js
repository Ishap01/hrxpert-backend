// routes/employeeRoute.js
import express from 'express'
import { addEmployee ,fetchEmployeeByDepId,getEmployee,getEmployees, updateEmployee} from '../controllers/employeeController.js'
import { upload } from '../controllers/employeeController.js'
const router = express.Router()
 
//add authmiddleware
router.post('/add',upload.single('image'),addEmployee)
router.get('/',getEmployees)
router.get('/:id',getEmployee)
router.put('/:id',updateEmployee)
router.get('/department/:id',fetchEmployeeByDepId)
export default router
