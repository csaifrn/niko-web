import axiosInstance from '../../../axiosInstance';
import {
  ResponseAddSettle,
  ParamAddSettle,
  ResponseDeleteSettle,
  ParamsDeleteSettle,
  ResponseStatus,
} from './patch.interface';

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
}: ParamsDeleteSettle): Promise<ResponseStatus[] | any> => {
  const data = settlement_project_category_id.map(async (settle) => {
    const ResponseDeleteBatcheSettle = await axiosInstance.delete<ResponseStatus>(`/batches/${id}/settlement-project`, {
      data: {
        settlement_project_category_id: settle,
      },
    });
    return ResponseDeleteBatcheSettle;
  });

  return data;
};
