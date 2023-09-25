export interface PatchBatcheParams {
  id: string;
  settlement_project?: string;
  digital_files_count?: number;
  physical_files_count?: number;
  priority?: boolean;
}

export interface PatchResponseBatche {
  id: string;
  priority: string;
}

export interface PatchResponseEditBatch {
  id: string;
  settlement_project: string;
  digital_files_count: number;
  physical_files_count: number;
}
