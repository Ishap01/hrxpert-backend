import Notification from '../models/Notification.js';

export const createNotification = async (req, res) => {
  try {
    const { employeeId, employeeName, message } = req.body;

    const newNotification = new Notification({
      employeeId,
      employeeName,
      message,
      date: new Date()
    });

    await newNotification.save();
    res.status(201).json({ success: true, notification: newNotification });
  } catch (error) {
    console.error("Error creating notification:", error);
    res.status(500).json({ success: false, message: "Failed to create notification" });
  }
};