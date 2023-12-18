export interface CreateBatcheParams {
  observation: string;
  id: string;
  is_pending: boolean;
}

export interface CreateObservationResponse {
  id: string;
  batch_id: string;
  observation: string;
  is_pending:boolean;
}
