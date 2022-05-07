import { hashSync } from 'bcryptjs';
import mongoose from 'mongoose';
import { createSchemaWithSoftDelete } from './utils/createSchema';
import { ISoftDeletedDocument, ISoftDeletedModel } from './utils/softDelete';

export interface IUser extends ISoftDeletedDocument {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = createSchemaWithSoftDelete({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
    select: false,
  },
});

userSchema.pre('save', function (next) {
  const user: IUser = this;

  if (user.isModified('password')) {
    user.password = hashSync(user.password);
  }

  next();
});

export const User = mongoose.model<IUser, ISoftDeletedModel<IUser>>(
  'User',
  userSchema
);
