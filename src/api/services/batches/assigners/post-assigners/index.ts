import axiosInstance from '../../../../axiosInstance';
import { PostAssignersParams, PostAssignersParamsMe, PostResponseAssigners } from './post.interface';

export const PostAssigners = async ({
  batch_id,
  assignment_users_ids,
}: PostAssignersParams): Promise<PostResponseAssigners> => {
  const Assigners = await axiosInstance.post<PostResponseAssigners>(`/batches/${batch_id}/assignment`, {
    assignment_users_ids,
  });

  return Assigners.data;
};

export const PostAssignersMe = async ({ batch_id }: PostAssignersParamsMe): Promise<PostResponseAssigners> => {
  const Assigners = await axiosInstance.post<PostResponseAssigners>(`/batches/${batch_id}/assignment/me`);

  return Assigners.data;
};
