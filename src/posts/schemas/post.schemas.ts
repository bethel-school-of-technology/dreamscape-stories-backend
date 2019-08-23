import * as mongoose from 'mongoose';

export const postSchema = new mongoose.Schema({
  id: Number,
  user: String,
  content: String,
});
