import axiosInstance from '../../../axiosInstance';
import { ResponseAddSettle, ParamAddSettle } from './patch.interface';

export const PostBatcheSettle = async ({
  id,
  settlementProjectCategories,
}: ParamAddSettle): Promise<ResponseAddSettle> => {
  const BatcheStatus = await axiosInstance.post<ResponseAddSettle>(`/batches/${id}/settlement-project`, {
    settlementProjectCategories,
  });

  return BatcheStatus.data;
};
