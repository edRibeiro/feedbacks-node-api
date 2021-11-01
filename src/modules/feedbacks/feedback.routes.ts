import * as express from "express";
import {
  createFeedback,
  getAllFeedbacks,
  getFeedback,
  updateFeedback,
} from "./feedback.controller";
import { verifyToken } from "../auth/auth.middleware";
import validate from "../../middleware/validateRequest";
import createFeedbackSchema from "./validations/createFeedback.schema";
import updateFeedbackSchema from "./validations/updateFeedback.schema";
const router = express.Router();

router.get("/", verifyToken, getAllFeedbacks);
router.get("/:id", verifyToken, getFeedback);
router.post("/", [verifyToken, validate(createFeedbackSchema)], createFeedback);
router.patch(
  "/:id",
  [verifyToken, validate(updateFeedbackSchema)],
  updateFeedback
);

export default router;
