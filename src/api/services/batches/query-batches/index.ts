import axiosInstance from '../../../axiosInstance';
import { GetResponseBatche, GetBatcheParams } from './get.interface';

export const QueryBatche = async ({ status }: GetBatcheParams): Promise<GetResponseBatche[]> => {
  const Batche = await axiosInstance.get<GetResponseBatche[]>(`/Batches`, {
    params: {
      main_status: status,
    },
  });

  return Batche.data;
};
