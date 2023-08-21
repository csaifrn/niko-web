import axiosInstance from '../../../axiosInstance';
import { SignUpParams, SignUpResponse } from './signUp.interface';

export const signUp = async ({ name, email, password, passwordConfirm }: SignUpParams): Promise<SignUpResponse> => {
  const user = await axiosInstance.post<SignUpResponse>('/users', {
    name,
    email,
    password,
    passwordConfirm,
  });

  return user.data;
};
