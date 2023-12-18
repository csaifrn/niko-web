import axiosInstance from '../../../axiosInstance';
import { Batche, GetBatcheParams } from './get.interface';

export const GetBatche = async ({ id }: GetBatcheParams): Promise<Batche> => {
  const Batche = await axiosInstance.get<Batche>(`/Batches/${id}`);

  return Batche.data;
};
