import axiosInstance from '../../../axiosInstance';
import { Category } from './get.interface';

export const GetCategories = async (): Promise<Category[]> => {
  const Categories = await axiosInstance.get<Category[]>(`/class-projects`);

  return Categories.data;
};
