import express from 'express'
import { addDepartment, deleteDepartment, getDepartment, getDepartments, updateDepartment } from '../controllers/departmentController.js'
const router = express.Router()
 
//add authmiddleware
router.post('/add',addDepartment)
router.get('/',getDepartments)
router.get('/:id',getDepartment)
router.put('/:id',updateDepartment)
router.delete('/:id',deleteDepartment)
export default router