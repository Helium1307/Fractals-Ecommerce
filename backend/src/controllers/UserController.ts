import { Request, Response } from 'express';
import {
  createUserDetailFromUser,
  createUserListFromUser,
} from '../models/dto/UserDTO';
import { FilterUser } from '../filters/FilterUser';
import { AuthenticatedRequest } from '../middlewares/auth';
import { UserService } from '../services/UserService';
import { pageable } from '../utils/pageable';
import { AbstractController } from './AbstractController';

export class UsersController extends AbstractController {
  private userService: UserService = this.getService('UserService');

  async create(req: Request, res: Response) {
    const user = await this.userService.create(req.body);
    return res.json(user);
  }

  async update(req: Request, res: Response) {
    const user = await this.userService.update(req.params.id, req.body);
    return res.json(user);
  }

  async delete(req: Request, res: Response) {
    const user = await this.userService.delete(req.params.id);
    return res.json(user);
  }

  async get(req: AuthenticatedRequest, res: Response) {
    const user = await this.userService.findById(req.params.id);
    return res.json(createUserDetailFromUser(user));
  }

  async findAll(req: AuthenticatedRequest, res: Response) {
    const filter: FilterUser = req.query;

    const users = await this.userService.findAll(filter);
    return res.json(users.map(createUserListFromUser));
  }
  async paginate(req: AuthenticatedRequest, res: Response) {
    const { limit, page, ...filter } = pageable(req.query);

    const { result, ...resultPage } = await this.userService.paginate(
      filter,
      limit,
      page
    );
    return res.json({
      ...resultPage,
      result: result.map(createUserListFromUser),
    });
  }
}
