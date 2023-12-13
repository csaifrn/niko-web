import { Batche } from '../get-batche/get.interface';

export interface PatchBatcheStatusParams {
  id: string;
  main_status: number;
}

export type PatchResponseBatcheStatus = Batche;
