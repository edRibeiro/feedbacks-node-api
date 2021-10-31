import { Schema, Document, Model, model } from 'mongoose';
import { IUser } from '../users/user.model';

export interface IFeedback extends Document {
  createdAt: Date,
  finalfeedback: string;
  improvementpoints: string;
  maintainpoints: string;
  owner: IUser['_id'];
  suggestions: string;
  user: IUser['_id'];

}

export var  FeedbackSchema: Schema = new Schema({
  owner: { type: Schema.Types.ObjectId, required: true },
  user: { type: Schema.Types.ObjectId, required: true },
  finalfeedback: { type: String, required: true },
  improvementpoints: { type: String, required: true },
  maintainpoints: { type: String, required: true },
  suggestions: { type: String, required: true },
});

FeedbackSchema.pre("save", function(next) {
  let now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

export const FeedbackModel: Model<IFeedback> =  model<IFeedback>('Feedback', FeedbackSchema);