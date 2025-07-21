
import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  department: String,
  salary: Number
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
