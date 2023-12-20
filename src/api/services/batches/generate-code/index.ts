import axiosInstance from '../../../axiosInstance';
import { GenerateCodeReponse } from './generate-code.interface';

export const PatchBatchePriority = async (id: string): Promise<GenerateCodeReponse> => {
  const { data } = await axiosInstance.post<GenerateCodeReponse>(`/batches/${id}/generate-shelf-number`);

  return data;
};
