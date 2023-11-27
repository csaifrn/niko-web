import axiosInstance from '../../../axiosInstance';
import { PatchResponseBatcheStatus, PatchBatcheStatusParams } from './patch.interface';

export const PatchBatcheMainStatus = async ({
  id,
  main_status,
}: PatchBatcheStatusParams): Promise<PatchResponseBatcheStatus> => {
  const BatcheStatus = await axiosInstance.patch<PatchResponseBatcheStatus>(`/Batches/${id}/main-status`, {
    main_status,
  });

  return BatcheStatus.data;
};
