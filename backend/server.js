import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import main from './config/db.js'
import authRoutes from './routes/auth.js';
import employeeRouter from "./routes/employee.js";
import departmentRouter from './routes/department.js'
import dashboardRouter from './routes/dashboard.js'
import attendanceRouter  from './routes/attendance.js';
import notificationRouter  from './routes/notification.js';
import salaryRouter from './routes/salary.js'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is up and running!')
})
app.use('/api/auth', authRoutes);
app.use(express.static('public/uploads'))
app.use('/api/department',departmentRouter)
app.use("/api/employee", employeeRouter);
app.use("/api/dashboard",dashboardRouter)
app.use('/api/attendance', attendanceRouter);
app.use("/api/employees", employeeRouter);
app.use("/api/salary",salaryRouter)
app.use('/api/notification',notificationRouter)
const PORT = process.env.PORT || 5000
console.log('PORT from env:', process.env.PORT);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
