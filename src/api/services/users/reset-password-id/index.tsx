import axiosInstance from '../../../axiosInstance';
import { ResetPasswordParams } from './reset.id.interface';

export const ResetPasswordId = async ({ password, passwordConfirmation }: ResetPasswordParams): Promise<any> => {
  const data = await axiosInstance.post<any>('/users/reset-password', {
    password,
    passwordConfirmation,
  });

  return data.data;
};
