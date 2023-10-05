export interface GetBatcheParams {
  id: string;
}

export interface GetResponseBatche {
  id: string;
  title: string;
  digital_files_count: number;
  physical_files_count: number;
  priority: boolean;
  shelf_number: any;
  created_at: string;
  updated_at: string;
  created_by: CreatedBy;
  category: Category;
}

export interface CreatedBy {
  user_id: string;
  name: string;
}

export interface Category {
  settlement_project_category_id: string;
  name: string;
}
