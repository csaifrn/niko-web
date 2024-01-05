import axiosInstance from '../../../axiosInstance';
import { ResponseAddSettle, ParamAddSettle, ParamsDeleteSettle, ResponseStatus } from './patch.interface';

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
  settlement_project_category_ids,
}: ParamsDeleteSettle): Promise<ResponseStatus> => {
  const data = await axiosInstance.delete<ResponseStatus>(`/batches/${id}/settlement-project`, {
    data: {
      settlement_project_category_ids,
    },
  });

  return data.data;
};

interface Params {
  id: string;
  settlement_project_category_ids: string[];
  settlementProjectCategories: string[];
}

export const PatchBatcheSettle = async ({
  id,
  settlement_project_category_ids,
  settlementProjectCategories,
}: Params): Promise<[ResponseStatus, ResponseAddSettle]> => {
  const dataOld = await axiosInstance.delete<ResponseStatus>(`/batches/${id}/settlement-project`, {
    data: {
      settlement_project_category_ids,
    },
  });

  const dataNew = await axiosInstance.post<ResponseAddSettle>(`/batches/${id}/settlement-project`, {
    settlementProjectCategories,
  });

  return [dataOld.data, dataNew.data];
};
