import mongoose from 'mongoose';

const employeeNotificationSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  read: {
    type: Boolean,
    default: false,
  }
});

export default mongoose.model('EmployeeNotification', employeeNotificationSchema);