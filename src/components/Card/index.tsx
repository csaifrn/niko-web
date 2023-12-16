import theme from '../../global/theme';
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
import { Tooltip } from 'react-tooltip';

interface CardProps {
  color: string;
  srcImgIcon: string;
  //link: string;

  fase: number;
}
//
export const CardFase = ({ ...props }: CardProps) => {
  const [batchesDispo, setBatchesDispo] = useState<GetResponseBatche[]>([]);
  const [batchesAnda, setBatchesAnda] = useState<GetResponseBatche[]>([]);
  const [batchesConc, setBatchesConc] = useState<GetResponseBatche[]>([]);

  const mutateBatchesQuery = useMutation(QueryBatche, {
    onSuccess: (data: GetResponseBatche[]) => {
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
    <CardContainer>
      <FigureIconCard backgroundColor={props.color}>
        <ImgIconCard src={props.srcImgIcon}></ImgIconCard>
      </FigureIconCard>
      {props.fase == -1 && (
        <TextBoxCard>
          <DataStrongCard>
            <NumberCard backgroundColor={theme.colors['green/400']}>{0}</NumberCard>
            <NomeEtapa>REMESSAS RECEBIDAS</NomeEtapa>
          </DataStrongCard>
        </TextBoxCard>
      )}
      {props.fase == 0 && (
        <TextBoxCard>
          <DataStrongCard>
            <NumberCard backgroundColor={theme.colors['yellow/300']}>{batchesAnda.length}</NumberCard>
            <NomeEtapa>ANDAMENTO</NomeEtapa>
          </DataStrongCard>

          {/* <DataStrongCard>
            <NumberCard backgroundColor={theme.colors.["red/300"]}>{batchesConc.length}</NumberCard>
            <NomeEtapa>EM PAUSA</NomeEtapa>
          </DataStrongCard> */}
        </TextBoxCard>
      )}
      {props.fase === 1 && (
        <TextBoxCard>
          <DataStrongCard>
            <NumberCard backgroundColor={theme.colors['green/400']}>{batchesDispo.length}</NumberCard>
            <NomeEtapa>DISPONÍVEIS</NomeEtapa>
          </DataStrongCard>

          <DataStrongCard>
            <NumberCard backgroundColor={theme.colors['yellow/300']}>{batchesAnda.length}</NumberCard>
            <NomeEtapa>ANDAMENTO</NomeEtapa>
          </DataStrongCard>

          {/* <DataStrongCard>
              <NumberCard backgroundColor={theme.colors.["red/300"]}>{batchesConc.length}</NumberCard>
              <NomeEtapa>EM PAUSA</NomeEtapa>
            </DataStrongCard> */}
        </TextBoxCard>
      )}
      {props.fase === 2 && (
        <TextBoxCard>
          <DataStrongCard>
            <NumberCard backgroundColor={theme.colors['green/400']}>{batchesDispo.length}</NumberCard>
            <NomeEtapa>DISPONÍVEIS</NomeEtapa>
          </DataStrongCard>

          <DataStrongCard>
            <NumberCard backgroundColor={theme.colors['yellow/300']}>{batchesAnda.length}</NumberCard>
            <NomeEtapa>ANDAMENTO</NomeEtapa>
          </DataStrongCard>

          {/* <DataStrongCard>
              <NumberCard backgroundColor={theme.colors.["red/300"]}>{batchesConc.length}</NumberCard>
              <NomeEtapa>EM PAUSA</NomeEtapa>
            </DataStrongCard> */}
        </TextBoxCard>
      )}
      {props.fase === 3 && (
        <TextBoxCard>
          <DataStrongCard>
            <NumberCard backgroundColor={theme.colors['green/400']}>{batchesDispo.length}</NumberCard>
            <NomeEtapa>DISPONÍVEIS</NomeEtapa>
          </DataStrongCard>

          <DataStrongCard>
            <NumberCard backgroundColor={theme.colors['yellow/300']}>{batchesAnda.length}</NumberCard>
            <NomeEtapa>ANDAMENTO</NomeEtapa>
          </DataStrongCard>

          {/* <DataStrongCard>
              <NumberCard backgroundColor={theme.colors.["red/300"]}>{batchesConc.length}</NumberCard>
              <NomeEtapa>EM PAUSA</NomeEtapa>
            </DataStrongCard> */}
        </TextBoxCard>
      )}
      {props.fase == 4 && (
        <TextBoxCard>
          <DataStrongCard>
            <NumberCard backgroundColor={theme.colors['green/400']}>{batchesDispo.length}</NumberCard>
            <NomeEtapa>DISPONÍVEIS</NomeEtapa>
          </DataStrongCard>
        </TextBoxCard>
      )}
    </CardContainer>
  );
};
