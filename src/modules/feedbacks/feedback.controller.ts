import { Request, Response } from "express";
import { FeedbackModel } from "./feedback.model";

const createFeedback = async (req: Request, res: Response) => {
  const {
    finalfeedback,
    improvementpoints,
    maintainpoints,
    suggestions,
    user,
  } = req.body;

  try {
    const feedback = await FeedbackModel.create({
      finalfeedback,
      improvementpoints,
      maintainpoints,
      suggestions,
      user,
      owner: req.user.id,
    });

    return res.status(201).json({ data: feedback });
  } catch (error) {
    return res.status(422).json({ error });
  }
};

const updateFeedback = async (req: Request, res: Response) => {
  const { finalfeedback, improvementpoints, maintainpoints, suggestions } =
    req.body;
  const { id } = req.params;

  const feedback = await FeedbackModel.findById(id);
  if (!feedback) {
    return res
      .status(404)
      .json({ message: `Feedback with id "${id}" not found.` });
  }

  if (feedback.owner != req.user.id) {
    return res.status(401).json({ success: false, message: "Access denied." });
  }
  try {
    const updateFeedback = await FeedbackModel.findOneAndUpdate(
      { _id: feedback.id },
      {
        finalfeedback,
        improvementpoints,
        maintainpoints,
        suggestions,
      }
    );

    return res.status(200).json({ data: updateFeedback });
  } catch (error) {
    return res.status(422).json({ success: false, message: error });
  }
};

const getAllFeedbacks = async (req: Request, res: Response) => {
  try {
    const feedbacks = await FeedbackModel.find({
      $or: [{ owner: req.user.id }, { user: req.user.id }],
    })
      .populate("owner")
      .populate("user");
    return res.status(201).json({ data: feedbacks });
  } catch (error) {
    return res.status(422).json({ error });
  }
};

const getFeedback = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const feedback = await FeedbackModel.findOne({
      $or: [{ owner: req.user.id }, { user: req.user.id }],
      _id: id,
    })
      .populate("owner")
      .populate("user");
    if (!feedback) {
      return res
        .status(404)
        .json({ message: `Feedback with id "${id}" not found.` });
    }
    if (feedback.owner.id !== req.user.id && feedback.user.id !== req.user.id) {
      return res
        .status(401)
        .json({ success: false, message: "Access denied." });
    }
    return res.status(201).json({ data: feedback });
  } catch (error) {
    return res.status(422).json({ error });
  }
};

export { createFeedback, getAllFeedbacks, getFeedback, updateFeedback };
