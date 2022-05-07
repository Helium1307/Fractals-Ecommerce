import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { AuthenticatedRequest } from '../middlewares/auth';
import { AbstractController } from './AbstractController';
import { createUserDetailFromUser } from '../models/dto/UserDTO';

export default class AuthController extends AbstractController {
  private userService: UserService = this.getService('UserService');

  async login(req: Request, res: Response) {
    const { username, password } = req.body;

    const user = await this.userService.login(username, password);

    return res.status(200).json(user);
  }

  async getMe(req: AuthenticatedRequest, res: Response) {
    const user = await this.userService.findById(req.userId);
    return res.json(createUserDetailFromUser(user));
  }
}
