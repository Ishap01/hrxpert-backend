import User from '../models/Users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Employee from '../models/Employee.js'; 

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
     
    if (!user) {
      return res.status(404).json({ success: false, error: "User Not Found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({ success: false, error: "Wrong Password" });
    }

    // Create token
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_KEY,
      { expiresIn: "10d" }
    );

    let responseUser = {
      _id: user._id,
      name: user.name,
      role: user.role
    };


    if (user.role === "Employee") {
      const employeeData = await Employee.findOne({ userId: user._id });
      if (employeeData) {
        responseUser.employeeId = employeeData.employeeId;
      }
    }

    res.status(200).json({
      success: true,
      token,
      user: responseUser
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingEmployee = await User.findOne({email});
    if(existingEmployee){
      return res.status(400).json({message:"Email is already registered"});
    }
    else{

    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();
    res.status(201).send("User registered");
    }
  } catch (err) {
    res.status(400).send("Error registering user");
  }
};

const verify = (req, res) => {
  return res.status(200).json({ success: true, user: req.user });
};

export { login, register, verify };
