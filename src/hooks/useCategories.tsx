import { useQuery } from 'react-query';
import { GetCategories } from '../api/services/class/get-classes';

export const useCategories = () => {
  const {
    data: categories,
    isLoading: isLoadingCategories,
    refetch,
  } = useQuery('categories', GetCategories, {
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { categories, isLoadingCategories, refetch };
};
