import express from "express";
import { getSummary } from "../controllers/dashboardController.js";
const router = express.Router()
//add middleware
router.get('/summary', getSummary)
export default router