import { Document } from 'mongoose';

export interface AppDocument<T = {}> extends Document<T> {
  createdAt: Date;
  updatedAt: Date;
}
