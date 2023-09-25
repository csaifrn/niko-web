import axiosInstance from '../../../axiosInstance';
import { GetResponseBatche, GetBatcheParams } from './get.interface';

export const GetBatche = async ({ id }: GetBatcheParams): Promise<GetResponseBatche> => {
  const Batche = await axiosInstance.get<GetResponseBatche>(`/Batches/${id}`);

  return Batche.data;
};
