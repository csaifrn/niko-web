import axiosInstance from '../../../axiosInstance';
import { CreateResponseBatche, CreateBatcheParams } from './create.interface';

export const CreateBatche = async ({ settlement_project }: CreateBatcheParams): Promise<CreateResponseBatche> => {
  const Batche = await axiosInstance.post<CreateResponseBatche>('/Batches', {
    settlement_project,
  });

  return Batche.data;
};
