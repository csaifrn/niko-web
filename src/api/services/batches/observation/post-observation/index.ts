import axiosInstance from '../../../../axiosInstance';
import { CreateObservationResponse, CreateBatcheParams } from './post.interface';

export const CreateObservation = async ({
  observation,
  id,
  //is_pending,
}: CreateBatcheParams): Promise<CreateObservationResponse> => {
  const Batche = await axiosInstance.post<CreateObservationResponse>(`/batches/observations/${id}`, {
    observation,
    //is_pending,
  });

  return Batche.data;
};
