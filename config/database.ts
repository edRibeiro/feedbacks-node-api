import mongoose from 'mongoose';

export const connect = (): Promise<mongoose.Mongoose> => {
  if (!process.env.MONGO_URL) throw new Error('MONGODB_URL not found!');

  return mongoose.connect(process.env.MONGO_URL);

};