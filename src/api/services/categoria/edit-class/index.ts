import axiosInstance from '../../../axiosInstance';
import { EditCategoriaParams, EditCategoriaResponse } from './get.interface';

export const EditCategory = async ({ id, name }: EditCategoriaParams): Promise<EditCategoriaResponse> => {
  console.log(id, name);
  const Batche = await axiosInstance.patch<EditCategoriaResponse>(`/class-projects/${id}`, {
    name,
  });

  return Batche.data;
};
