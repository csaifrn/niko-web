import axiosInstance from '../../../axiosInstance';
import { PatchResponseBatche, PatchBatcheParams } from './patch.interface';

export const PatchBatchePriority = async ({ id, priority }: PatchBatcheParams): Promise<PatchResponseBatche> => {
  const Batche = await axiosInstance.patch<PatchResponseBatche>(`/Batches/${id}`, {
    priority,
  });

  return Batche.data;
};
