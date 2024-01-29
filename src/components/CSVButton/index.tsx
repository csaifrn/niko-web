import { Parser } from '@json2csv/plainjs';
import { CSVButtonProps } from './csv-button.interface';
import { saveAs } from 'file-saver';
import * as S from './styled';
import { formatFileNameWithCurrentDate } from '../../utils/formatFileNameWithCurrentDate.util';
import { formatDate } from '../../utils/formatDateToCustomTable.util';
import { Tooltip } from 'react-tooltip';

export const CSVButton = ({ fileName, columns, data }: CSVButtonProps) => {
  const formatOptions = (key: string, value: any) => {
    const column = columns.find((col) => col.key === key);
    if (column && column.formatToDate) {
      return formatDate(value);
    }
    return value;
  };

  const exportToCSV = () => {
    try {
      const jsonData = data?.map((row) => {
        type RecordString = { [key: string]: any };
        const obj: RecordString = {};
        columns.forEach((column) => {
          obj[column.name] = formatOptions(column.key, row[column.key]);
        });
        return obj;
      });
      const parser = new Parser({
        delimiter: ',',
        quote: '',
        withBOM: true,
      });

      const csv = jsonData && parser.parse(jsonData);
      const csvData = new Blob([csv || ''], {
        type: 'text/plain;charset=UTF-8',
      });
      saveAs(csvData, `${formatFileNameWithCurrentDate(fileName)}.csv`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <S.Wrapper onClick={exportToCSV} className="CSVTooltip">
      <S.Icon alt="Exportar para CSV" />
      <Tooltip anchorSelect={'.CSVTooltip'} place="top">
        Exportar para CSV
      </Tooltip>
    </S.Wrapper>
  );
};
