import axiosInstance from '../../../axiosInstance';
import { UserPatchParams, UserPatchResponse } from './userPatch.interface';

export const userPatch = async ({ name }: UserPatchParams): Promise<UserPatchResponse> => {
  const user = await axiosInstance.patch<UserPatchResponse>('/users', {
    name,
  });

  return user.data;
};
