import axiosInstance from '../../../../axiosInstance';
import { DeleteResponseAssigners, DeleteAssignersParams, DeleteAssignerParams } from './delete.interface';

export const DeleteAssigner = async ({
  batch_id,
  assignment_user_id,
}: DeleteAssignerParams): Promise<DeleteResponseAssigners> => {
  const Batche = await axiosInstance.delete<DeleteResponseAssigners>(`/batches/${batch_id}/assignment`, {
    data: {
      assignment_user_id,
    },
  });

  return Batche.data;
};

export const DeleteAssigners = async ({ batch_id, assignment_user_ids }: DeleteAssignersParams) => {
  assignment_user_ids.map(async (assignment_user_id) => {
    const Batche = await axiosInstance.delete(`/batches/${batch_id}/assignment`, {
      data: {
        assignment_user_id,
      },
    });
  });
};
