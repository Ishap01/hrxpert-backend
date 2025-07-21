// routes/employeeRoute.js
import express from "express";
import { insertDummyEmployee } from "../controllers/employeeController.js";

const router = express.Router();

router.post("/dummy-employee", insertDummyEmployee);

export default router; 
