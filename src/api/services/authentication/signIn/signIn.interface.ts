export interface SignInParams {
  email: string;
  password: string;
}

export interface SignInResponse {
  token: string;
  user: {
    id: string;
    name: string;
  };
}

export interface UnauthorizedError {
  statusCode: number;
  message: string;
  error: string;
}

import { AxiosError } from 'axios';
export type ApiError = AxiosError<UnauthorizedError>;
