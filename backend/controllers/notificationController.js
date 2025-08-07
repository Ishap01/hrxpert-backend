import EmployeeNotification from '../models/EmployeeNotification.js';
import Notification from '../models/Notification.js';

export const createNotification = async (req, res) => {
  try {
    const { employeeId, employeeName, message } = req.body;

    const newNotification = new Notification({
      employeeId,
   
      message
  
    });

    await newNotification.save();
    res.status(201).json({ success: true, notification: newNotification });
  } catch (error) {
    console.error("Error creating notification:", error);
    res.status(500).json({ success: false, message: "Failed to create notification" });
  }
};
export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find()
      .sort({ createdAt: -1 }); 

    res.status(200).json({ success: true, notifications });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
export const getNotificationsByEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const notifications = await EmployeeNotification.find({ employeeId }).sort({ createdAt: -1 });
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
