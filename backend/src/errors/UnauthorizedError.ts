import AppError from './AppError';
import { messages } from '../config/messages';

export class UnauthorizedError extends AppError {
  constructor(message: string = messages.UNAUTHORIZED) {
    super(message, 401);
  }
}
