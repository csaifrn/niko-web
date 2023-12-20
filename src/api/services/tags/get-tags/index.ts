import axiosInstance from '../../../axiosInstance';
import { Tags } from './get.interface';

export const GetTags = async (): Promise<Tags> => {
  const Tags = await axiosInstance.get<Tags>(`/tags`);

  return Tags.data;
};
