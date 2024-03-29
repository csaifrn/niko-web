export interface DeleteBatcheParams {
  id: string;
}

export interface DeleteResponseBatche {
  id: string;
  titile: string;
  created_at: Date;
  updated_at: Date;
  created_by: {
    user_id: string;
    name: string;
  };
}
