import { Router } from 'express';

import { UsersController } from '../controllers/UserController';
import { AppRouter } from './AppRouter';
import { auth } from '../middlewares/auth';

export function createRoute(): AppRouter {
  const router = Router();
  const userController = new UsersController();

  router.get('/', auth, userController.findAll.bind(userController));
  router.get('/paginate', auth, userController.paginate.bind(userController));
  router.get('/:id', auth, userController.get.bind(userController));
  router.post('/', userController.create.bind(userController));

  router.put('/:id', auth, userController.update.bind(userController));
  router.delete('/:id', auth, userController.delete.bind(userController));

  return {
    path: '/users',
    router,
  };
}
