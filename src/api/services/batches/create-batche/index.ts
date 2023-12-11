import axiosInstance from '../../../axiosInstance';
import { GetResponseBatche } from '../get-batche/get.interface';
import { CreateBatcheParams } from './create.interface';

export const CreateBatche = async ({ title }: CreateBatcheParams): Promise<GetResponseBatche> => {
  const Batche = await axiosInstance.post<GetResponseBatche>('/Batches', {
    title,
  });

  return Batche.data;
};
