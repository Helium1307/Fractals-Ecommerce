import { Router } from 'express';
import { AppRouter } from './AppRouter';

export function createRoute(): AppRouter {
  const router = Router();

  router.get('/');

  return {
    path: '/',
    router,
  };
}
