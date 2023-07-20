export interface SignUpParams {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface SignUpResponse {
  id: string;
  name: string;
  email: string;
}

export interface UnauthorizedError {
  statusCode: number;
  message: string;
  error: string;
}

import { AxiosError } from 'axios';
export type ApiError = AxiosError<UnauthorizedError>;
