import axiosInstance from '../../../axiosInstance';
import { CreateResponseBatche, CreateBatcheParams } from './create.interface';

export const CreateBatche = async ({
  title,
  settlement_project_category_id,
}: CreateBatcheParams): Promise<CreateResponseBatche> => {
  const Batche = await axiosInstance.post<CreateResponseBatche>('/Batches', {
    title,
    settlement_project_category_id,
  });

  return Batche.data;
};
