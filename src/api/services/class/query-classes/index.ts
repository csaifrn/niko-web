import axiosInstance from '../../../axiosInstance';
import { QueryClass, ResponseClasses } from './get.interface';

export const QueryClasses = async ({ name }: QueryClass): Promise<ResponseClasses> => {
  const Classes = await axiosInstance.get<ResponseClasses>(`/class-projects/autocomplete?`, {
    params: {
      name,
    },
  });

  return Classes.data;
};
