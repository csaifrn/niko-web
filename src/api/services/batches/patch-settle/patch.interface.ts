import { Batche } from '../get-batche/get.interface';

export interface ParamAddSettle {
  id: string;
  settlementProjectCategories: string[];
}

export type ResponseAddSettle = Batche;
