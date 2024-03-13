import axiosInstance from '../../../axiosInstance';
import { EditClassParams, EditClassResponse } from './get.interface';

export const EditClass = async ({ id, name, priority }: EditClassParams): Promise<EditClassResponse> => {
  const Batche = await axiosInstance.patch<EditClassResponse>(`/class-projects/${id}`, {
    name,
    priority,
  });

  return Batche.data;
};
