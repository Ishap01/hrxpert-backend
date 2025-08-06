import Employee from "../models/Employee.js"
import User from "../models/Users.js"
import Department from "../models/Department.js"
import bcrypt from'bcrypt'
import path from "path"
import multer from 'multer'
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/uploads")

    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+ path.extname(file.originalname))
    }
})
const upload = multer({storage:storage})
const addEmployee = async(req,res)=>{
    try{
     const{name,email,employeeId,dob,gender,maritalStatus,designation,department,salary,password,role} = req.body;
     const user = await User.findOne({email})
     if(user){
        return res.status(400).json({success:false, error:"user already registered in emp"})
     }
     const hashPassword = await bcrypt.hash(password,10)
     const newUser = new User({
        name,
        email,
        password : hashPassword,
        role,
       profileimage:req.file? req.file.filename:""
        

     })
     const savedUser= await newUser.save()
     const newEmployee = new Employee({
        userId : savedUser._id,
        employeeId,
        dob,
        gender,
        maritalStatus,
        designation,
        department,
        salary
     })
     await newEmployee.save()
       return res.status(200).json({success:true, message:"employee created"})
    }catch(error){
        return res.status(500).json({success:false, message:"server error in adding employee"})
    }
}
const getEmployee = async(req,res)=>{
 try{
    const {id} = req.params;
    const employee = await Employee.findById({_id:id}).populate('userId',{password:0}).populate("department");
  return res.status(200).json({success:true,employee})
    }
    catch(error){
        return res.status(500).json({success:false, error:"get employee server error"})
    }
}
const getEmployees =async (req,res)=>{
  try{
        const employees = await Employee.find().populate('userId',{password:0}).populate("department");
        return res.status(200).json({success:true,employees})
    }
    catch(error){
        return res.status(500).json({success:false, error:"get employees server error"})
    }
}
const fetchEmployeeByDepId =async(req,res)=>{
try{
    const {id} = req.params;
    const employees = await Employee.find({department:id});
  return res.status(200).json({success:true,employees})
    }
    catch(error){
        return res.status(500).json({success:false, error:"get employees by dept id server error"})
    }
}
const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, maritalStatus, designation, salary, department } = req.body;


    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ success: false, error: "Employee not found" });
    }

   
    const user = await User.findById(employee.userId);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    
    const updatedUser = await User.findByIdAndUpdate(employee.userId, { name }, { new: true });

   
    const updatedEmp = await Employee.findByIdAndUpdate(
      id,
      { maritalStatus, designation, salary, department },
      { new: true }
    );

   
    if (!updatedUser || !updatedEmp) {
      return res.status(404).json({ success: false, error: "Update failed" });
    }

    return res.status(200).json({ success: true, message: "Employee updated" });
  } catch (error) {
    console.error("Update Error:", error);
    return res.status(500).json({ success: false, error: "Update employee server error" });
  }
};

export{addEmployee,upload,getEmployees,getEmployee,updateEmployee,fetchEmployeeByDepId}
