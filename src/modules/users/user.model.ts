import bcrypt from 'bcrypt';
import { Schema, Document, Model, model } from 'mongoose';

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
  if (!this.createdAt) {
    let now = new Date();
    this.createdAt = now;
  }
  if (this.isModified('password')) {
    const salt = bcrypt.genSaltSync();
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});

// Export the model and return your IUser interface
export const UserModel: Model<IUser> =  model<IUser>('User', UserSchema);