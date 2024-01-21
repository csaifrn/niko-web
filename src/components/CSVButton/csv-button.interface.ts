export interface CSVButtonProps {
  fileName: string;
  columns: Colum[];
  data: any[] | undefined;
}

interface Colum {
  name: string;
  key: string;
  formatToDate?: boolean;
  formatToCurrency?: boolean;
}
