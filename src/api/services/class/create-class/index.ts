import axiosInstance from '../../../axiosInstance';
import { CreateClassParams, CreateClassResponse } from './get.interface';

export const CreateClass = async ({ name }: CreateClassParams): Promise<CreateClassResponse> => {
  const Batche = await axiosInstance.post<CreateClassResponse>('/class-projects', {
    name,
  });

  return Batche.data;
};
