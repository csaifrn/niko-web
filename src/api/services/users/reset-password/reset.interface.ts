export interface ResetPasswordParams {
  email: string;
}

export interface ResetPasswordResponse {
  message: string;
}

export interface UnauthorizedError {
  statusCode: number;
  message: string;
  error: string;
}

import { AxiosError } from 'axios';
export type ApiError = AxiosError<UnauthorizedError>;
