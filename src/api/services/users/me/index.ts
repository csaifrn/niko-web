import axiosInstance from '../../../axiosInstance';
import { GetMeResponse } from './me.interface';

export const GetMe = async (): Promise<GetMeResponse> => {
  const { data } = await axiosInstance.get<GetMeResponse>('/users/me')

  return data;
};
