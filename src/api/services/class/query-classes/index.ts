import axiosInstance from '../../../axiosInstance';
import { Class } from '../../batches/get-batche/get.interface';
import { QueryClass } from './get.interface';

export const QueryClasses = async ({ name }: QueryClass): Promise<Class[]> => {
  const Classes = await axiosInstance.get<Class[]>(`/class-projects`);

  return Classes.data;
};
