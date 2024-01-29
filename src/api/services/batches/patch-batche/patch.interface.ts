export interface PatchBatcheParams {
  id: string;
  title?: string;
  digital_files_count?: number;
  physical_files_count?: number;
  priority?: boolean;
  storage_location?: string;
}

export interface PatchBatcheClassParams {
  id: string;
  title?: string;
  digital_files_count?: number;
  physical_files_count?: number;
  priority?: boolean;
  storage_location?: string;
  newIds: string[];
  deletedIds: string[];
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

export interface PatchShelfNumberParams {
  id: string;
  shelf_number: string;
}

export interface PatchShelfNumberResponse {
  status: string;
}
