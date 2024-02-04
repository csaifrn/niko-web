import { Class } from '../../batches/get-batche/get.interface';

export interface QueryClass {
  name: string;
}

export interface ResponseClasses {
  searchedText: string;
  classes: Class[];
}
