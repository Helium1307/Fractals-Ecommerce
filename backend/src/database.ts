import mongoose from 'mongoose';
import logger from './logger';

const mongoUrl = process.env.DB;

export async function connectDatabase() {
  logger.info(`Conectando ao banco de dados: ${mongoUrl}`);

  return mongoose.connect(mongoUrl);
}
