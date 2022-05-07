import { IUser } from '../User';

export class UserDTO {
  name: string;
  email: string;
  password: string;
}

export class UserListDTO {
  _id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export class UserDetailDTO {
  _id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: Boolean;
  deletedAt: Date;
}

export interface UserLogin {
  user: UserDetailDTO;
  token: string;
}

export function createUserListFromUser(user: IUser): UserListDTO {
  if (!user) return null;

  return {
    _id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  };
}

export function createUserDetailFromUser({
  id,
  name,
  email,
  createdAt,
  updatedAt,
  isDeleted,
  deletedAt,
}: IUser): UserDetailDTO {
  return {
    _id: id,
    name,
    email,
    createdAt,
    updatedAt,
    deletedAt,
    isDeleted,
  };
}
