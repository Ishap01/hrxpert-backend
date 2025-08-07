import express from 'express';
import { createNotification, getNotifications, getNotificationsByEmployee } from '../controllers/notificationController.js';

const router = express.Router();

// POST: Create notification
router.post('/send', createNotification);


router.get('/admin/get', getNotifications);
router.get('/employee/:employeeId', getNotificationsByEmployee);
export default router;