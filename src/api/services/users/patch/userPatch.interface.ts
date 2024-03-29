export interface UserPatchParams {
  name: string;
  email: string;
}

export interface UserPatchResponse {
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
