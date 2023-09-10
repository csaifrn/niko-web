import axiosInstance from '../../../axiosInstance';
import { ResetPasswordParams, ResetPasswordResponse } from './reset.interface';

export const ResetPassword = async ({ email }: ResetPasswordParams): Promise<ResetPasswordResponse> => {
  const data = await axiosInstance.post<ResetPasswordResponse>('/users/reset-password', {
    email,
  });

  return data.data;
};
