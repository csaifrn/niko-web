import axiosInstance from '../../../axiosInstance';
import { CreateResponseBatche, CreateBatcheParams } from './create.interface';

export const CreateBatche = async ({
  settlement_project,
  settlement_project_category_id,
}: CreateBatcheParams): Promise<CreateResponseBatche> => {
  const Batche = await axiosInstance.post<CreateResponseBatche>('/Batches', {
    settlement_project,
    settlement_project_category_id,
  });

  return Batche.data;
};
