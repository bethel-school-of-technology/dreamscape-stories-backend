import { Document } from 'mongoose';

export interface Dream extends Document {
  readonly id: number;
  readonly user: string;
  readonly content: string;
}