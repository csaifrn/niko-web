export interface GetBatcheParams {
  id: string;
}

export interface GetResponseBatche {
  id: string;
  settlement_project: string;
  digital_files_count: number;
  physical_files_count: number;
  priority: number;
  shelf_number: null | number;
  created_at: string;
  updated_at: string;
  created_by: CreatedBy;
}

export interface CreatedBy {
  user_id: string;
  name: string;
}
