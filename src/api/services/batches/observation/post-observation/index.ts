import axiosInstance from '../../../../axiosInstance';
import { CreateObservationResponse, CreateBatcheParams } from './post.interface';

export const CreateObservation = async ({
  observation,
  id,
}: CreateBatcheParams): Promise<CreateObservationResponse> => {
  const Batche = await axiosInstance.post<CreateObservationResponse>(`/batches/observations/${id}`, {
    observation,
  });

  return Batche.data;
};
