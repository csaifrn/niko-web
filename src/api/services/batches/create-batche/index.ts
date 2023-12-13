import axiosInstance from '../../../axiosInstance';
import { Batche } from '../get-batche/get.interface';
import { CreateBatcheParams } from './create.interface';

export const CreateBatche = async ({ title }: CreateBatcheParams): Promise<Batche> => {
  const Batche = await axiosInstance.post<Batche>('/Batches', {
    title,
  });

  return Batche.data;
};
