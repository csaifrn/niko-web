import { GetResponseBatche } from '../get-batche/get.interface';

export interface PatchBatcheStatusParams {
  id: string;
  status: number;
}

export type PatchResponseBatcheStatus = GetResponseBatche;
