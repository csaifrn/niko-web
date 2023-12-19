import axiosInstance from '../../../axiosInstance';
import { Operador } from './users.interface';

export const GetOperadores = async (): Promise<Operador[]> => {
  const Operadores = await axiosInstance.get<Operador[]>('/users');

  return Operadores.data;
};