import { Batche } from '../get-batche/get.interface';

export interface ParamAddSettle {
  id: string;
  class_projects_ids: string[];
}

export type ResponseAddSettle = Batche;

export interface ParamsDeleteSettle {
  id: string;
  class_projects_ids: string[];
}

export interface ResponseDeleteSettle {
  status: ResponseStatus[];
}

export interface ResponseStatus {
  status: string;
}
