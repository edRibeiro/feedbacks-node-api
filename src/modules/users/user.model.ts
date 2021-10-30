import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  createdAt: Date,
  email: string;
  name: string;
  password: string;
}

export var UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true }
});

UserSchema.pre("save", function(next) {
  let now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

// Export the model and return your IUser interface
export default mongoose.model<IUser>('User', UserSchema);