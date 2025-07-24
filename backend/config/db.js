import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

main().catch(err => console.error("MongoDB connection error:", err))

async function main() {
  await mongoose.connect(process.env.MONGODB_URL)
  console.log("✅ DB connected successfully")
}

export default main