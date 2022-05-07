import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'joi';

import AppError from './AppError';
import logger from '../logger';

export function errorHandler(
  err: Error,
  _request: Request,
  response: Response,
  _next: NextFunction
) {
  logger.error(err);

  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  } else if (err instanceof ValidationError) {
    return response.status(422).json({ message: err.details });
  }

  return response.status(500).json({
    status: 'Error',
    message: `Internal server error: ${err.message}`,
  });
}
