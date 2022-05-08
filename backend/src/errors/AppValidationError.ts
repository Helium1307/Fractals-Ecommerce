import AppError from './AppError';

export class AppValidationError extends AppError {
  constructor(message: string, statusCode: number = 422) {
    super(message, statusCode);
  }
}
