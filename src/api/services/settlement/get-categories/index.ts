import axiosInstance from '../../../axiosInstance';
import { Category } from './get.interface';

export const GetCategories = async (): Promise<Category[]> => {
  const { data } = await axiosInstance.get(`/settlement-project-categories`);

  return data;
};
