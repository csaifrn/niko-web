import axiosInstance from '../../../axiosInstance';
import { ResponseSettle, QuerySettle } from './get.interface';

export const QuerySettles = async ({ name }: QuerySettle): Promise<ResponseSettle> => {
  const Settles = await axiosInstance.get<ResponseSettle>(`/class-projects/autocomplete?`, {
    params: {
      name,
    },
  });

  return Settles.data;
};
