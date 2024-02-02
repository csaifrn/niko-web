import axiosInstance from '../../../axiosInstance';
import { CreateCategoriaParams, CreateCategoriaResponse } from './get.interface';

export const CreateCategory = async ({ name }: CreateCategoriaParams): Promise<CreateCategoriaResponse> => {
  const Batche = await axiosInstance.post<CreateCategoriaResponse>('/class-projects', {
    name,
  });

  return Batche.data;
};
