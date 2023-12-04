import { useQuery } from 'react-query';
import { QueryBatche } from '../api/services/batches/query-batches';

export const useBatchByStatus = (status: number) => {
  const { data, isLoading } = useQuery([`batch-status-${status}`, status], () => QueryBatche({ status }), {
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { data, isLoading };
};
