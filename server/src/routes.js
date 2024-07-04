import express from "express";
export const router = express.Router();
import { authAdmin, create_admin } from "./Controllers/AdminController.js";
router.post("/authenticate", authAdmin);
router.post("/create/admin", create_admin);
