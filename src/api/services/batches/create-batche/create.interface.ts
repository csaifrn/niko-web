export interface CreateBatcheParams {
  title: string;
  physical_files_count?: number;
  digital_files_count?: number;
  priority?: boolean;
}

export interface CreateResponseBatche {
  id: string;
  title: string;
  physical_files_count: number;
  digital_files_count: number;
  priority: boolean;
}
