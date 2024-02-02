import axiosInstance from '../../../axiosInstance';
import { DeleteCategoriaParams, DeleteCategoriaResponse } from './get.interface';

export const DeleteCategory = async ({id}: DeleteCategoriaParams): Promise<DeleteCategoriaResponse> => {
  const Batche = await axiosInstance.delete<DeleteCategoriaResponse>(`/class-projects/${id}`, {
  });

  return Batche.data;
};
