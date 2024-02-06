import axiosInstance from '../../../axiosInstance';
import { ResponseAddSettle, ParamAddSettle, ParamsDeleteSettle, ResponseStatus } from './patch.interface';

export const PostBatcheSettle = async ({ id, class_projects_ids }: ParamAddSettle): Promise<ResponseAddSettle> => {
  const BatcheStatus = await axiosInstance.post<ResponseAddSettle>(`/batches/${id}/class-project`, {
    class_projects_ids,
  });

  return BatcheStatus.data;
};

export const DeleteBatcheSettle = async ({ id, class_projects_ids }: ParamsDeleteSettle): Promise<ResponseStatus> => {
  const data = await axiosInstance.delete<ResponseStatus>(`/batches/${id}/class-project`, {
    data: {
      class_projects_ids,
    },
  });

  return data.data;
};

interface Params {
  id: string;
  class_projects_ids: string[];
  class_projects_deleted_ids: string[];
}

export const PatchBatcheSettle = async ({
  id,
  class_projects_ids,
  class_projects_deleted_ids,
}: Params): Promise<[ResponseStatus, ResponseAddSettle]> => {
  const dataOld = await axiosInstance.delete<ResponseStatus>(`/batches/${id}/class-project`, {
    data: {
      class_projects_ids: class_projects_deleted_ids,
    },
  });

  const dataNew = await axiosInstance.post<ResponseAddSettle>(`/batches/${id}/class-project`, {
    class_projects_ids,
  });

  return [dataOld.data, dataNew.data];
};
