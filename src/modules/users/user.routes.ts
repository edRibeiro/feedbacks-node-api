import * as express from "express";
import { getProfile } from "./user.controller";
import { verifyToken } from "../auth/auth.middleware";

const router = express.Router();

router.get("/profile", verifyToken, getProfile);

export default router;
