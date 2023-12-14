import { Batche } from "../../get-batche/get.interface";

export interface DeleteAssignersParams {
  batch_id: string;
  assignment_user_id: string;
}

export interface DeleteResponseAssigners extends Batche {
  
}
