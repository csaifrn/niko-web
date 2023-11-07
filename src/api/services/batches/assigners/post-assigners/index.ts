import axiosInstance from '../../../../axiosInstance';
import { GetResponseBatche } from '../../get-batche/get.interface';
import { PostAssignersParams } from './post.interface';

export const PostAssigners = async ({
  batch_id,
  assignment_users_ids,
}: PostAssignersParams): Promise<GetResponseBatche> => {
  const Assigners = await axiosInstance.post<GetResponseBatche>(`/batches/${batch_id}/assignment`, {
    assignment_users_ids,
  });

  return Assigners.data;
};
