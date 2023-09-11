import axiosInstance from '../../../axiosInstance';
import { PatchResponseBatche, PatchBatcheParams } from './patch.interface';

export const PatchBatche = async ({ id, settlement_project }: PatchBatcheParams): Promise<PatchResponseBatche> => {
  const Batche = await axiosInstance.patch<PatchResponseBatche>(`/Batches/${id}`, {
    settlement_project,
  });

  return Batche.data;
};
