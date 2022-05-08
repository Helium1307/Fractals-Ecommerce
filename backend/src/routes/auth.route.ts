import { Router } from 'express';

import { auth } from '../middlewares/auth';
import AuthController from '../controllers/AuthController';
import { AppRouter } from './AppRouter';

export function createRoute(): AppRouter {
  const controller = new AuthController();

  const router = Router();

  router.post('/login', controller.login.bind(controller));
  router.get('/me', auth, controller.getMe.bind(controller));

  return {
    path: '/auth',
    router,
  };
}
