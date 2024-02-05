import axiosInstance from '../../../axiosInstance';
import { ResponseClasses, QueryClass } from './get.interface';

export const QuerySettles = async ({ name }: QueryClass): Promise<ResponseClasses> => {
  const Settles = await axiosInstance.get<ResponseClasses>(`/class-projects/autocomplete?`, {
    params: {
      name,
    },
  });

  return Settles.data;
};
