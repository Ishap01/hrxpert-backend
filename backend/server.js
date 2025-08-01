import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import connectToDatabase from './config/db.js';

connectToDatabase()
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);



app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
