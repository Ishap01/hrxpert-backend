import Leave from '../models/Leave.js'
import Employee from '../models/Employee.js'

const addLeave = async (req, res) => {
    try{
        const{userId, leaveType, startDate, endDate, reason} = req.body;
        const employee = await Employee.findOne({userId: userId})
        if (!employee) {
            return res.status(404).json({ success: false, error: 'Employee not found' });
        }
        const newLeave = new Leave({
            employeeId: employee._id,
            leaveType,
            startDate,
            endDate,
            reason
        })
        await newLeave.save();
        return res.status(200).json({success: true})
    }catch(error){
        console.error(error.message);
        return res.status(500).json({success: false, error: 'Leave Add Server Error'})
    }
}
const getLeave  = async (req, res) => {
    try{
        const {id} = req.params;
        let leaves = await Leave.find({employeeId: id})
        if(!leaves || leaves.length === 0){
            const employee = await Employee.findOne({userId: id});
            if (!employee) {
                // No employee found, return empty array
                return res.status(200).json({success: true, leaves: []});
            }
             leaves = await Leave.find({employeeId: employee._id});
        }
        res.status(200).json({success: true, leaves})
    }catch(error){
        console.error(error.message);
        return res.status(500).json({success: false, error: 'Get Leaves Server Error'})
    }
}

const getLeaves = async (req, res) => {
    try{
        
        const leaves = await Leave.find().populate({
            
            path: 'employeeId',
            populate: [
                {path: 'department', select: 'dep_name'},
                {path: 'userId', select: 'name'}
            ]
        });
         
        return res.status(200).json({success: true, leaves})
    }catch(error){
        console.error("Error in getLeaves:", error.message);
        return res.status(500).json({success: false, error: 'Get Leaves Server Error'})
    }
}

const getLeaveDetail = async (req, res) => {
    try{
        const {id} = req.params;
        const leave = await Leave.findById(id).populate({
            
            path: 'employeeId',
            populate: [
                {path: 'department', select: 'dep_name'},
                {path: 'userId', select: 'name profileimage'}
            ]
        });
        if (!leave) {
            return res.status(404).json({ success: false, error: 'Leave not found' });
        } 
        return res.status(200).json({success: true, leave})
    }catch(error){
        console.error('Error fetching leave details:', error); 
        return res.status(500).json({success: false, error: 'Leave Add  Server Error'})
    }
}


const updateLeave = async (req, res) => {
    try{
        const {id} = req.params;
        const leave = await Leave.findByIdAndUpdate({_id: id}, {status: req.body.status})
        
        if(!leave){
            return res.status(404).json({success: false, error: 'Leave not found'})
        }
        return res.status(200).json({success: true})
    }
    catch(error){
        console.error('Error fetching leave details:', error); 
        return res.status(500).json({success: false, error: 'Leave Update Server Error'})
    }
}


export {addLeave, getLeave, getLeaves, getLeaveDetail,updateLeave}