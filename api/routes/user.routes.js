import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { varifyToken } from "../utils/varifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update:userId", varifyToken, updateUser);

export default router;
