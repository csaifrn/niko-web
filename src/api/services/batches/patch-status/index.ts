import axiosInstance from '../../../axiosInstance';
import { PatchResponseBatcheStatus, PatchBatcheStatusParams } from './patch.interface';

export const PatchBatcheStatusStatus = async ({
  id,
  status,
}: PatchBatcheStatusParams): Promise<PatchResponseBatcheStatus> => {
  const BatcheStatus = await axiosInstance.patch<PatchResponseBatcheStatus>(`/Batches/${id}/status`, {
    status,
  });

  return BatcheStatus.data;
};
