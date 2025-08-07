import Salary from "../models/Salary.js";
import Employee from '../models/Employee.js';
const addSalary =async (req,res)=>{
try{
    const{employeeId , basicSalary, allowances , deduction , payDate} = req.body;
    const totalSalary = parseInt(basicSalary) + parseInt(allowances) - parseInt(deduction)
    const newSalary = new Salary({
        employeeId,
        basicSalary,
        allowances,
        deduction,
        netSalary: totalSalary,
        payDate
    })
    await newSalary.save();
    return res.status(200).json({success:true})
}catch(error){
 return res.status(500).json({success:false})
}
}
const getSalary =async(req,res)=>{
  try{
    const {id} = req.params;
    const salary = await Salary.find({employeeId :id}).populate('employeeId','employeeId')
    return res.status(200).json({success:true , salary})
  }catch(error){
    return res.status(500).json({success:false})
  }
}
const getPayslip = async (req, res) => {

  try {
      const empId = req.params.employeeId;
 
  
    const employee = await Employee.findOne({ employeeId: empId });

    if (!employee) {
      return res.status(404).json({ success: false, message: "Employee not found" });
    }


    const salary = await Salary.findOne({ employeeId: employee._id }).populate('employeeId');

    if (!salary) {
      return res.status(404).json({ success: false, message: "Payslip not generated yet" });
    }

    return res.status(200).json({ success: true, salary });
  } catch (error) {
    console.error("Error fetching payslip:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export {addSalary , getSalary,getPayslip}