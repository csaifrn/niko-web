import axiosInstance from '../../../axiosInstance';
import { PatchResponseBatcheStatus, PatchBatcheStatusParams } from './patch.interface';

export const PatchBatcheSpecifStatus = async ({
  id,
  specific_status,
}: PatchBatcheStatusParams): Promise<PatchResponseBatcheStatus> => {
  const BatcheStatus = await axiosInstance.patch<PatchResponseBatcheStatus>(`/Batches/${id}/specific-status`, {
    specific_status,
  });

  return BatcheStatus.data;
};
