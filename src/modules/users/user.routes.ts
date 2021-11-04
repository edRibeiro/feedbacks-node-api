import * as express from "express";
import { getProfile, getUsers } from "./user.controller";
import { verifyToken } from "../auth/auth.middleware";

const router = express.Router();

router.get("/", verifyToken, getUsers);
router.get("/profile", verifyToken, getProfile);

export default router;
