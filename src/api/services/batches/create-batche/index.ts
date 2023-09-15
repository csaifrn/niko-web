import axiosInstance from '../../../axiosInstance';
import { CreateResponseBatche, CreateBatcheParams } from './create.interface';

export const CreateBatche = async ({
  settlement_project,
  priority = false,
}: CreateBatcheParams): Promise<CreateResponseBatche> => {
  const Batche = await axiosInstance.post<CreateResponseBatche>('/Batches', {
    settlement_project,
    priority,
  });

  return Batche.data;
};

