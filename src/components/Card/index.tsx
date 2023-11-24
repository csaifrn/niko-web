import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import { GetResponseBatche } from '../../api/services/batches/get-batche/get.interface';
import { QueryBatche } from '../../api/services/batches/query-batches';
import {
  CardContainer,
  DataStrongCard,
  FigureIconCard,
  ImgIconCard,
  NumberCard,
  TextBoxCard,
  NomeEtapa,
} from './styles';

interface CardProps {
  color: string;
  srcImgIcon: string;
  link: string;

  fase: number;
}
//
export const CardFase = ({ ...props }: CardProps) => {
  const [batchesDispo, setBatchesDispo] = useState<GetResponseBatche[]>([]);
  const [batchesAnda, setBatchesAnda] = useState<GetResponseBatche[]>([]);
  const [batchesConc, setBatchesConc] = useState<GetResponseBatche[]>([]);

  const mutateBatchesQuery = useMutation(QueryBatche, {
    onSuccess: (data: GetResponseBatche[]) => {
      console.log(data, props.fase);
      setBatchesDispo(data.filter((batche) => batche.specific_status === 0));
      setBatchesAnda(data.filter((batche) => batche.specific_status === 1));
      setBatchesConc(data.filter((batche) => batche.specific_status === 2));
    },
    onError: (err: ApiError) => {
      toast.error(err.message);
    },
  });

  useEffect(() => {
    mutateBatchesQuery.mutate({
      status: props.fase,
    });
  }, []);

  return (
    <CardContainer href={props.link}>
      <FigureIconCard backgroundColor={props.color}>
        <ImgIconCard src={props.srcImgIcon}></ImgIconCard>
      </FigureIconCard>
      {props.fase == -1 && (
        <TextBoxCard>
          <DataStrongCard>
            <NumberCard backgroundColor="#43DB6D">{0}</NumberCard>
            <NomeEtapa>REMESSAS RECEBIDAS</NomeEtapa>
          </DataStrongCard>
        </TextBoxCard>
      )}
      {props.fase == 0 && (
        <TextBoxCard>
          <DataStrongCard>
            <NumberCard backgroundColor="#FCDE42">{batchesAnda.length}</NumberCard>
            <NomeEtapa>ANDAMENTO</NomeEtapa>
          </DataStrongCard>

          {/* <DataStrongCard>
            <NumberCard backgroundColor="#F32D2D">{batchesConc.length}</NumberCard>
            <NomeEtapa>EM PAUSA</NomeEtapa>
          </DataStrongCard> */}
        </TextBoxCard>
      )}
      {props.fase === 1 && (
        <TextBoxCard>
          <DataStrongCard>
            <NumberCard backgroundColor="#43DB6D">{batchesDispo.length}</NumberCard>
            <NomeEtapa>DISPONÍVEIS</NomeEtapa>
          </DataStrongCard>

          <DataStrongCard>
            <NumberCard backgroundColor="#FCDE42">{batchesAnda.length}</NumberCard>
            <NomeEtapa>ANDAMENTO</NomeEtapa>
          </DataStrongCard>

          {/* <DataStrongCard>
              <NumberCard backgroundColor="#F32D2D">{batchesConc.length}</NumberCard>
              <NomeEtapa>EM PAUSA</NomeEtapa>
            </DataStrongCard> */}
        </TextBoxCard>
      )}
      {props.fase === 2 && (
        <TextBoxCard>
          <DataStrongCard>
            <NumberCard backgroundColor="#43DB6D">{batchesDispo.length}</NumberCard>
            <NomeEtapa>DISPONÍVEIS</NomeEtapa>
          </DataStrongCard>

          <DataStrongCard>
            <NumberCard backgroundColor="#FCDE42">{batchesAnda.length}</NumberCard>
            <NomeEtapa>ANDAMENTO</NomeEtapa>
          </DataStrongCard>

          {/* <DataStrongCard>
              <NumberCard backgroundColor="#F32D2D">{batchesConc.length}</NumberCard>
              <NomeEtapa>EM PAUSA</NomeEtapa>
            </DataStrongCard> */}
        </TextBoxCard>
      )}
      {props.fase === 3 && (
        <TextBoxCard>
          <DataStrongCard>
            <NumberCard backgroundColor="#43DB6D">{batchesDispo.length}</NumberCard>
            <NomeEtapa>DISPONÍVEIS</NomeEtapa>
          </DataStrongCard>

          <DataStrongCard>
            <NumberCard backgroundColor="#FCDE42">{batchesAnda.length}</NumberCard>
            <NomeEtapa>ANDAMENTO</NomeEtapa>
          </DataStrongCard>

          {/* <DataStrongCard>
              <NumberCard backgroundColor="#F32D2D">{batchesConc.length}</NumberCard>
              <NomeEtapa>EM PAUSA</NomeEtapa>
            </DataStrongCard> */}
        </TextBoxCard>
      )}
      {props.fase == 4 && (
        <TextBoxCard>
          <DataStrongCard>
            <NumberCard backgroundColor="#43DB6D">{batchesDispo.length}</NumberCard>
            <NomeEtapa>DISPONÍVEIS</NomeEtapa>
          </DataStrongCard>
        </TextBoxCard>
      )}
    </CardContainer>
  );
};
