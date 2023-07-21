import axiosInstance from '../../../axiosInstance';
import { SignInParams, SignInResponse } from './signIn.interface';

export const signIn = async ({ email, password }: SignInParams): Promise<SignInResponse> => {
  const user = await axiosInstance.post<SignInResponse>('/auth/sign-in', {
    email,
    password,
  });

  return user.data;
};
