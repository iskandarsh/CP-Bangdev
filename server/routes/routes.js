import express from "express";
import { getUsers } from "../controllers/DummyController.js";

const router = express.Router();

router.get("/data_user", getUsers);

export default router;
