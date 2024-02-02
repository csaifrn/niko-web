import { Class } from '../../batches/get-batche/get.interface';

export interface QuerySettle {
  name: string;
}

export interface ResponseSettle {
  searchedText: string;
  classes: Class[];
}
