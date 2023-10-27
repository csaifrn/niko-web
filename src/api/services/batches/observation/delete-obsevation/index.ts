import axiosInstance from '../../../../axiosInstance';
import { DeleteResponseObservation, DeleteObservationParams } from './delete.interface';

export const DeleteObservation = async ({ id }: DeleteObservationParams): Promise<DeleteResponseObservation> => {
  const Observation = await axiosInstance.delete<DeleteResponseObservation>(`/batches/observations/${id}`);

  return Observation.data;
};
