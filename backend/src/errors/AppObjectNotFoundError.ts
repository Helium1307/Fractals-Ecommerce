import AppError from './AppError';
import { messages } from '../config/messages';

export class AppObjectNotFoundError extends AppError {
  constructor(message: string = messages.OBJECT_NOT_FOUND) {
    super(message, 400);
  }
}
