import { Category } from '../../batches/get-batche/get.interface';

export interface QuerySettle {
  name: string;
}

export interface ResponseSettle {
  searchedText: string;
  categories: Category[];
}
