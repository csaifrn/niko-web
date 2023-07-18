import axiosInstance from '../../../axiosInstance';
import { ResetPasswordParams } from './reset.interface';

export const ResetPassword = async ({ email }: ResetPasswordParams): Promise<any> => {
  const data = await axiosInstance.post<any>('/users/reset-password', {
    email,
  });

  return data.data;
};
