import axiosInstance from '../../../axiosInstance';
import { DeleteResponseBatche, DeleteBatcheParams } from './delete.interface';

export const DeleteBatche = async ({ id }: DeleteBatcheParams): Promise<DeleteResponseBatche> => {
  const Batche = await axiosInstance.delete<DeleteResponseBatche>(`/Batches/${id}`);

  return Batche.data;
};
