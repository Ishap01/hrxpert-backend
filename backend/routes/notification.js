import express from 'express';
import { createNotification, getAllNotifications } from '../controllers/notificationController.js';

const router = express.Router();

// POST: Create notification
router.post('/send', createNotification);


//router.get('/', getAllNotifications);

export default router;