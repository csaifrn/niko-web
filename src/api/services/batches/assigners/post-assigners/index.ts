import axiosInstance from '../../../../axiosInstance';
import { PostAssignersParams, PostResponseAssigners } from './post.interface';

export const PostAssigners = async ({
  batch_id,
  assignment_users_ids,
}: PostAssignersParams): Promise<PostResponseAssigners> => {
  const Assigners = await axiosInstance.post<PostResponseAssigners>(`/batches/${batch_id}/assignment`, {
    assignment_users_ids,
  });

  return Assigners.data;
};
