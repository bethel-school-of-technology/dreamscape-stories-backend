import * as mongoose from 'mongoose';

export const DreamSchema = new mongoose.Schema({
  id: Number,
  user: String,
  content: String,
});