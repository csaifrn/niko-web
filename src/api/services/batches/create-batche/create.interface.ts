export interface CreateBatcheParams {
  settlement_project: string; // Nome do Lote
}

export interface CreateResponseBatche {
  id: string;
  settlement_project: string;
}
