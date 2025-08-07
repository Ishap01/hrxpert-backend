import express from 'express';
import Attendance from '../models/Attendance.js';
import Employee from '../models/Employee.js';
import EmployeeNotification from '../models/EmployeeNotification.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { employeeId, date, status } = req.body;
    const validStatuses = ['Present', 'Absent', 'Leave'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid attendance status' });
    }

    const normalizedDate = new Date(date);
    normalizedDate.setUTCHours(0, 0, 0, 0);

    const existing = await Attendance.findOne({ employeeId, date: normalizedDate });
    if (existing) {
      return res.status(400).json({ message: 'Attendance already marked for this employee on this date' });
    }

    const newAttendance = new Attendance({ employeeId, date: normalizedDate, status });
    await newAttendance.save();

   
    const message = `Your attendance has been marked as ${status} for ${normalizedDate.toDateString()}`;
    await EmployeeNotification.create({ employeeId, message });

    res.status(201).json(newAttendance);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get('/employee-notifications/:employeeId', async (req, res) => {
  try {
    const { employeeId } = req.params;
    const notifications = await EmployeeNotification.find({ employeeId }).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
});
router.get('/', async (req, res) => {
  try {
    const { date } = req.query;
    if (!date) return res.status(400).json({ message: 'Date is required' });

    const normalizedDate = new Date(date);
    normalizedDate.setUTCHours(0, 0, 0, 0);

    const attendanceRecords = await Attendance.find({ date: normalizedDate });

    const enriched = await Promise.all(
      attendanceRecords.map(async (record) => {
        const employee = await Employee.findOne({ employeeId: record.employeeId })
          .populate('userId', 'name')
          .populate('department', 'dep_name');

        return {
          employeeId: record.employeeId,
          name: employee?.userId?.name || 'Unknown',
          department: employee?.department?.dep_name || 'N/A',
          status: record.status,
          date: record.date,
        };
      })
    );

    res.json(enriched);
  } catch (err) {
    console.error('Error fetching attendance report:', err);
    res.status(500).json({ message: err.message });
  }
});

export default router;