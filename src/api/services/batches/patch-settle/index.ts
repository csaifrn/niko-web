import axiosInstance from '../../../axiosInstance';
import { ResponseAddSettle, ParamAddSettle, ResponseDeleteSettle, ParamsDeleteSettle } from './patch.interface';

export const PostBatcheSettle = async ({
  id,
  settlementProjectCategories,
}: ParamAddSettle): Promise<ResponseAddSettle> => {
  const BatcheStatus = await axiosInstance.post<ResponseAddSettle>(`/batches/${id}/settlement-project`, {
    settlementProjectCategories,
  });

  return BatcheStatus.data;
};

export const DeleteBatcheSettle = async ({
  id,
  settlement_project_category_id,
}: ParamsDeleteSettle): Promise<ResponseDeleteSettle> => {
  const ResponseDeleteBatcheSettle = await axiosInstance.delete<ResponseDeleteSettle>(
    `/batches/${id}/settlement-project`,
    {
      data: {
        settlement_project_category_id,
      },
    },
  );

  return ResponseDeleteBatcheSettle.data;
};
