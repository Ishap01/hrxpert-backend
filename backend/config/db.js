import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectToDatabase = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log("MongoDB connected"))
    } catch(error){
        console.log(error)
    }
}

export default connectToDatabase;