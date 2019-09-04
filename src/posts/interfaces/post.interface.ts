import { Document } from 'mongoose';

export interface post extends Document {
  readonly id: number;
  readonly user: string;
  readonly content: string;
}
