import axiosInstance from '../../../axiosInstance';
import { UserPatchParams, UserPatchResponse } from './userPatch.interface';

export const userPatch = async ({ name, email }: UserPatchParams): Promise<UserPatchResponse> => {
  const {data} = await axiosInstance.patch<UserPatchResponse>('/users', {
    name,
    email,
  });

  return data;
};
