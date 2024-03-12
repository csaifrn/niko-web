import { Batche, BatcheAssignedUser } from './../get-batche/get.interface';
export interface GetBatcheParams {
  status?: number;
}

export interface GetResponseBatche extends Batche {
  pending_batch_observations: number;
  assignedUsers: BatcheAssignedUser[];
}
