import { Batche } from '../get-batche/get.interface';

export interface PatchBatcheStatusParams {
  id: string;
  specific_status: number;
}

export type PatchResponseBatcheStatus = Batche;
