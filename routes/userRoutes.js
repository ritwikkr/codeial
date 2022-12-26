import express from "express";
import { createSession, logSession } from "../controllers/userController.js";

const router = express.Router();

router.route("/createSession").post(createSession);
router.route("/logSession").post(logSession);

export default router;
