import axiosInstance from '../../../axiosInstance';
import { SeachCategoriaResponseBatche, SeachCategoriaParams } from './get.interface';

export const SeachCategoria = async ({ name }: SeachCategoriaParams): Promise<SeachCategoriaResponseBatche> => {
  const Batche = await axiosInstance.get<SeachCategoriaResponseBatche>('/settlement-project-categories/autocomplete', {
    params: {
      name,
    },
  });

  return Batche.data;
};
