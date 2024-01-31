import axiosInstance from '../../../axiosInstance';
import { DeleteClassParams, DeleteClassResponse } from './get.interface';

export const DeleteClass = async ({ id }: DeleteClassParams): Promise<DeleteClassResponse> => {
  const Batche = await axiosInstance.delete<DeleteClassResponse>(`/class-projects/${id}`, {});

  return Batche.data;
};
