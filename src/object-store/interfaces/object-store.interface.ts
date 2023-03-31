import { Document } from 'mongoose';

export interface ObjectStore extends Document {
  readonly hash: string;
  readonly data: object;
}
