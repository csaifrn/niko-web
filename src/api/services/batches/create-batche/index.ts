import axiosInstance from '../../../axiosInstance';
import { GetResponseBatche } from '../get-batche/get.interface';
import { CreateBatcheParams } from './create.interface';

export const CreateBatche = async ({
  title,
  settlement_project_category_id,
}: CreateBatcheParams): Promise<GetResponseBatche> => {
  const Batche = await axiosInstance.post<GetResponseBatche>('/Batches', {
    title,
    settlement_project_category_id,
  });

  return Batche.data;
};
