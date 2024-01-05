import { Batche } from '../get-batche/get.interface';

export interface ParamAddSettle {
  id: string;
  settlementProjectCategories: string[];
}

export type ResponseAddSettle = Batche;

export interface ParamsDeleteSettle {
  id: string;
  settlement_project_category_ids: string[];
}

export interface ResponseDeleteSettle {
  status: ResponseStatus[];
}

export interface ResponseStatus {
  status: string;
}
