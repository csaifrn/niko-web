export interface GetBatcheParams {
  status: number;
}

export interface GetResponseBatche {
  id: string;
  title: string;
  main_status: number;
  specific_status: number;
  digital_files_count: number;
  physical_files_count: number;
  priority: boolean;
  shelf_number: any;
  created_at: string;
  updated_at: string;
  created_by: CreatedBy;
  settlementProjectCategories: Category[];
  assigned_users: AssignedUser[];
  tags: any[];
  observations: Observation[];
}
export interface CreatedBy {
  user_id: string;
  name: string;
}

export interface Category {
  settlement_project_category_id: string;
  name: string;
}

export interface AssignedUser {
  id: string;
  name: string;
}

export interface Observation {
  id: string;
  observation: string;
  created_by: CreatedBy2;
  created_at: string;
}

export interface CreatedBy2 {
  user_id: string;
  name: string;
}
