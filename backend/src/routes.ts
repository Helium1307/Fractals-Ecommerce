import path from 'path';
import { Express } from 'express';
import { readdir } from 'fs/promises';

import { AppRouter } from 'routes/AppRouter';
import logger from './logger';
import { errorHandler } from './errors/errorHandler';
import get_ip from './middlewares/get_ip';

async function loadRoutes(app: Express): Promise<void> {
  const routesPath = path.join(__dirname, './routes');
  const routes = await readdir(routesPath);

  await Promise.all(
    routes.filter(isRouteFile).map(async (routerFilename) => {
      const fullPath = path.join(routesPath, routerFilename);
      logger.info(`Criando rota: ${routerFilename}`);
      const { createRoute } = await import(fullPath);
      const router: AppRouter = createRoute();
      const routerPath = getRouterPath(router.path);
      logger.info(`Registrando rota: ${routerPath}`);
      app.use(routerPath, get_ip, router.router, errorHandler);
    })
  );
}

function getRouterPath(name: string) {
  const base = '/api';
  const resolvedPath = name.startsWith('/') ? name : `/${name}`;
  return `${base}${resolvedPath}`;
}

function isRouteFile(fileName: string) {
  return fileName.indexOf('.route.') > 0;
}

export { loadRoutes };
