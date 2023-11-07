import axiosInstance from '../../../../axiosInstance';
import { SearchUserResponseBatche, SearchUserParams } from './get.interface';

export const SearchUser = async ({ name }: SearchUserParams): Promise<SearchUserResponseBatche> => {
  const Batche = await axiosInstance.get<SearchUserResponseBatche>('/users/autocomplete', {
    params: {
      name,
    },
  });

  return Batche.data;
};
