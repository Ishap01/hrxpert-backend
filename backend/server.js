import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import main from './config/db.js'
import employeeRoute from "./routes/employeeRoute.js";

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is up and running!')
})

app.use("/api/employees", employeeRoute);
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
