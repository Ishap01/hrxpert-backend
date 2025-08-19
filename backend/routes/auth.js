import express from 'express';
import { login , register ,verify } from '../controllers/authController.js'
import authMiddelware from '../middleware/authMiddleware.js'

const router = express.Router();

//Login
router.post('/login',login)

// Register
router.post('/register', register)

router.get('/verify',authMiddelware,verify)

export default router;