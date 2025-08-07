import express from 'express'
import { addSalary, getPayslip, getSalary } from '../controllers/salaryController.js'


const router = express.Router()
 
//add authmiddleware
router.post('/add',addSalary)
router.get('/:id',getSalary)
router.get('/my-payslip/:employeeId', getPayslip);
export default router
