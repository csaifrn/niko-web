export interface GetBatcheParams {
  start_date: string;
  end_date: string;
}

export interface ListBatches {
  batches_count: number;
  batches: Batches[];
}

export interface Batches {
  main_status: number,
  specific_status: number;
}
