import axiosInstance from '../../../axiosInstance';
import { ListBatches, GetBatcheParams } from './listBatches.interface';

export const ListBatchesData = async ({ start_date, end_date }: GetBatcheParams): Promise<ListBatches> => {
  const Batche = await axiosInstance.get<ListBatches>(`/Batches/list`, {
    params: {
      start_date,
      end_date
    },
  });

  return Batche.data;
};
