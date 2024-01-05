import axiosInstance from '../../../axiosInstance';
import { EditCategoriaParams, EditCategoriaResponse } from './get.interface';

export const EditCategory = async ({ id , name }: EditCategoriaParams): Promise<EditCategoriaResponse> => {
  const Batche = await axiosInstance.patch<EditCategoriaResponse>(`/settlement-project-categories/${id}`, {
    name,
  });

  return Batche.data;
};
