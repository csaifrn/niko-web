export interface CreateBatcheParams {
  observation: string;
  id: string;
}

export interface CreateObservationResponse {
  id: string;
  batch_id: string;
  observation: string;
}
