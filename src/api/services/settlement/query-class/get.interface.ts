import { Class } from '../../batches/get-batche/get.interface';

export interface QueryClass {
  name: string;
}

export interface ResponseClasses {
  searchedText: string;
<<<<<<<< HEAD:src/api/services/settlement/query-class/get.interface.ts
  classes: Class[];
========
  classes: Category[];
>>>>>>>> master:src/api/services/class/query-classes/get.interface.ts
}
