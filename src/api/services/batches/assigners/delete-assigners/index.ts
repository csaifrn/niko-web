import axiosInstance from '../../../../axiosInstance';
import { DeleteResponseAssigners, DeleteAssignersParams } from './delete.interface';

export const DeleteAssigner = async ({
  batch_id,
  assignment_user_id,
}: DeleteAssignersParams): Promise<DeleteResponseAssigners> => {
  const Batche = await axiosInstance.delete<DeleteResponseAssigners>(`/batches/${batch_id}/assignment`, {
    data: {
      assignment_user_id,
    },
  });

  return Batche.data;
};
