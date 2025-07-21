import Employee from "../models/Employee.js";

export const insertDummyEmployee = async (req, res) => {
  try {
    const employee = await Employee.create({
      name: "Mitali Chadda",
      position: "Software Developer",
      department: "Engineering",
      salary: 60000
    });

    res.send("Dummy employee inserted ");
  } catch (err) {
    res.status(500).send("Something went wrong ");
  }
};
