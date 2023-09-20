export interface CreateBatcheParams {
  settlement_project: string
  physical_files_count?: number
  digital_files_count?: number
  priority?: boolean
}

export interface CreateResponseBatche {
  id: string
  settlement_project: string
  physical_files_count: number
  digital_files_count: number
  priority: boolean
}