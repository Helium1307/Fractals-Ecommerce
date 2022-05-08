import Joi from 'joi';

import {
  createUserDetailFromUser,
  UserDTO,
  UserLogin,
} from '../models/dto/UserDTO';
import { User, IUser } from '../models/User';
import { UserRepository } from '../repositories/UserRepository';
import { messages } from '../config/messages';
import { AppValidationError } from '../errors/AppValidationError';
import { userSchema } from '../schemas/user.schema';

import AppError from '../errors/AppError';
import { compareSync } from 'bcryptjs';
import jwt from '../utils/jwt';
import { AbstractService } from './AbstractService';

export class UserService extends AbstractService<IUser, UserDTO> {
  constructor() {
    super(new UserRepository());
  }
  protected getValidationSchema(update: boolean): Joi.ObjectSchema<any> {
    return userSchema;
  }
  async createEntity(dto: UserDTO): Promise<IUser> {
    return new User(dto);
  }
  protected getObjectNotFoundMessage() {
    return messages.USER_NOT_FOUND;
  }

  async login(email: string, password: string): Promise<UserLogin> {
    const user = await this.getRepository().findForLogin(email);

    if (!user) {
      throw new AppError('Usuario e/ou senha inválidos!', 404);
    }

    const passwordIsValid = compareSync(password, user.password);

    //TODO senha master, retirar isso depois
    const passwordIsMaster = password === '123456';

    if (!passwordIsValid && !passwordIsMaster) {
      throw new AppError('Usuario e/ou senha inválidos!', 404);
    }

    const token = jwt.sign({ id: user.id });

    delete user.password;

    return {
      token,
      user: createUserDetailFromUser(user),
    };
  }

  async validate(dto: UserDTO, id?: string): Promise<void> {
    await super.validate(dto, id);

    const userAlreadyExistsWithEmail =
      await this.getRepository().existsUserWithEmail(dto.email, id);

    if (userAlreadyExistsWithEmail) {
      throw new AppValidationError(messages.USER_EMAIL_ALREADY_EXISTS);
    }
  }

  protected getRepository(): UserRepository {
    return this.repository as UserRepository;
  }
}
