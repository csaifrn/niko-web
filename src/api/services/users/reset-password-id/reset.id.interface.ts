export interface ResetPasswordParams {
  password: string;
  passwordConfirm: string;
  id: string;
}

export interface UnauthorizedError {
  statusCode: number;
  message: string;
  error: string;
}

import { AxiosError } from 'axios';
export type ApiError = AxiosError<UnauthorizedError>;
