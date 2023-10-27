import axiosInstance from '../../../../axiosInstance';
import { UpadateResponseObservation, UpadateObservationParams } from './update.interface';

export const UpdateObservation = async ({
  id,
  observation,
}: UpadateObservationParams): Promise<UpadateResponseObservation> => {
  const Observation = await axiosInstance.patch<UpadateResponseObservation>(`/batches/observations/${id}`, {
    observation,
  });

  return Observation.data;
};
