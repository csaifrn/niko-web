import axiosInstance from '../../../axiosInstance';
import { ResetPasswordParams } from './reset.id.interface';

export const ResetPasswordId = async ({ id, password, passwordConfirm }: ResetPasswordParams): Promise<void> => {
  await axiosInstance.post<void>(`/users/reset-password/${id}`, {
    password,
    passwordConfirm,
  });
};
