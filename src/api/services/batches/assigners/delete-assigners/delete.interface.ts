import { Batche } from '../../get-batche/get.interface';

export interface DeleteAssignerParams {
  batch_id: string;
  assignment_user_id: string;
}

export interface DeleteAssignersParams {
  batch_id: string;
  assignment_user_ids: string[];
}

export interface DeleteResponseAssigners extends Batche {}
