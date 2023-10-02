export interface PatchBatcheParams {
  id: string;
  title?: string;
  digital_files_count?: number;
  physical_files_count?: number;
  priority?: boolean;
}

export interface PatchResponseBatche {
  id: string;
  priority: boolean;
}

export interface PatchResponseEditBatch {
  id: string;
  title: string;
  physical_files_count: number;
  digital_files_count: number;
  priority: boolean;
  updated_at: string;
}
