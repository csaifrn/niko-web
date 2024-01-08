import { useQuery } from 'react-query';
import { GetMe } from '../api/services/users/me';

export const useMe = () => {
  const {
    data: me,
    isLoading: isLoadingMe,
    refetch,
  } = useQuery('me', GetMe, {
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { me, isLoadingMe, refetch };
};
