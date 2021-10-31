import { Request, Response } from 'express';
import { IUser } from "../users/user.model";
import { FeedbackModel, IFeedback } from "./feedback.model";

const  createFeedback  = async (req: Request, res: Response) => {
  const {finalfeedback, improvementpoints, maintainpoints, suggestions, user, owner} = req.body;

  try{
      const feedback = await FeedbackModel.create({
        finalfeedback,
        improvementpoints,
        maintainpoints,
        suggestions,
        user,
        owner
      });
      return res.status(201).json({ data: feedback });
    }catch(error) {
      return res.status(422).json({ error });
    }
}

const  updateFeedback  = async (req: Request, res: Response) => {
  const {finalfeedback, improvementpoints, maintainpoints, suggestions, user, owner} = req.body;
  const { id } = req.params;

  const feedback = FeedbackModel.findById(id);
  if (!feedback) {
    return res.status(404).json({ message: `Feedback with id "${id}" not found.` });
  }
  try{
      const updateFeedback = await FeedbackModel.findByIdAndUpdate( id,{
        finalfeedback,
        improvementpoints,
        maintainpoints,
        suggestions,
        user,
        owner
      });
      return res.status(201).json({ data: updateFeedback });
    }catch(error) {
      return res.status(422).json({ error });
    }
}

const getAllFeedbacks = async (req: Request, res: Response) => {
  try{
    const updateFeedbacks =  await FeedbackModel.find();
    return res.status(201).json({ data: updateFeedbacks });
  }catch(error) {
    return res.status(422).json({ error });
  }
}

const getFeedback = async (req: Request, res: Response) => {
  const { id } = req.params;
  try{
    const feedback = await FeedbackModel.findById(id);
    return res.status(201).json({ data: feedback });
  }catch(error) {
    return res.status(422).json({ error });
  }
}

export {
  createFeedback,
  getAllFeedbacks,
  getFeedback,
  updateFeedback
};

