import 'dotenv/config';
import 'express-async-errors';

import app from './app';
import logger from './logger';
import { connectDatabase } from './database';
import { errorHandler } from './errors/errorHandler';
import { loadRoutes } from './routes';
import './inject';

const port = process.env.PORT || 8000;

async function start() {
  await connectDatabase();
  await loadRoutes(app);

  app.use(errorHandler);

  app.listen(port, () => logger.info(`Servidor no ar ${port}`));
}

start();
