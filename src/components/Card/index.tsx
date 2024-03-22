import theme from '../../global/theme';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
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
import { GetResponseBatche } from '../../api/services/batches/query-batches/get.interface';
import { ListShipments } from '../../api/services/shipments/list-shipments';

interface CardProps {
  color: string;
  srcImgIcon: string;
  fase: number;
}

//
export const CardFase = ({ ...props }: CardProps) => {
  const [batchesDispo, setBatchesDispo] = useState<GetResponseBatche[]>([]);
  const [batchesAnda, setBatchesAnda] = useState<GetResponseBatche[]>([]);

  const { data, refetch } = useQuery('Shipments', ListShipments);

  const mutateBatchesQuery = useMutation(QueryBatche, {
    onSuccess: (data: GetResponseBatche[]) => {
      setBatchesDispo(data.filter((batche) => batche.specific_status === 0));
      setBatchesAnda(data.filter((batche) => batche.specific_status === 1));
    },
    onError: (err: ApiError) => {
      if (props.fase == 0) {
        toast.error(err.message);
      }
    },
  });

  useEffect(() => {
    mutateBatchesQuery.mutate({
      status: props.fase,
    });
  }, []);

  return (
    <>
      {props.fase != -2 && (
        <CardContainer>
          <FigureIconCard backgroundColor={props.color}>
            <ImgIconCard src={props.srcImgIcon}></ImgIconCard>
          </FigureIconCard>

          {/* RECEPÇÃO */}
          {props.fase == -1 && (
            <TextBoxCard>
              <DataStrongCard>
                <NumberCard backgroundColor={theme.colors['green/400']}>{data?.length}</NumberCard>
                {data?.length === 1 ? (
                  <NomeEtapa>REMESSA RECEBIDA</NomeEtapa>
                ) : (
                  <NomeEtapa>REMESSAS RECEBIDAS</NomeEtapa>
                )}
              </DataStrongCard>
            </TextBoxCard>
          )}

          {/* PREPARO */}
          {props.fase == 0 && (
            <TextBoxCard>
              <DataStrongCard>
                <NumberCard backgroundColor={theme.colors['green/400']}>{batchesDispo.length}</NumberCard>
                {batchesDispo.length === 1 ? <NomeEtapa>DISPONÍVEL</NomeEtapa> : <NomeEtapa>DISPONÍVEIS</NomeEtapa>}
              </DataStrongCard>
              <DataStrongCard>
                <NumberCard backgroundColor={theme.colors['yellow/300']}>{batchesAnda.length}</NumberCard>
                <NomeEtapa>EM ANDAMENTO</NomeEtapa>
              </DataStrongCard>
            </TextBoxCard>
          )}
          {/* CATALOGAÇÃO */}
          {props.fase === 1 && (
            <TextBoxCard>
              <DataStrongCard>
                <NumberCard backgroundColor={theme.colors['green/400']}>{batchesDispo.length}</NumberCard>
                {batchesDispo.length === 1 ? <NomeEtapa>DISPONÍVEL</NomeEtapa> : <NomeEtapa>DISPONÍVEIS</NomeEtapa>}
              </DataStrongCard>

              <DataStrongCard>
                <NumberCard backgroundColor={theme.colors['yellow/300']}>{batchesAnda.length}</NumberCard>
                <NomeEtapa>ANDAMENTO</NomeEtapa>
              </DataStrongCard>
            </TextBoxCard>
          )}
          {/* DIGITALIZAÇÃO */}
          {props.fase === 2 && (
            <TextBoxCard>
              <DataStrongCard>
                <NumberCard backgroundColor={theme.colors['green/400']}>{batchesDispo.length}</NumberCard>
                {batchesDispo.length === 1 ? <NomeEtapa>DISPONÍVEL</NomeEtapa> : <NomeEtapa>DISPONÍVEIS</NomeEtapa>}
              </DataStrongCard>

              <DataStrongCard>
                <NumberCard backgroundColor={theme.colors['yellow/300']}>{batchesAnda.length}</NumberCard>
                <NomeEtapa>ANDAMENTO</NomeEtapa>
              </DataStrongCard>
            </TextBoxCard>
          )}
          {/* UPLOAD */}
          {props.fase === 3 && (
            <TextBoxCard>
              <DataStrongCard>
                <NumberCard backgroundColor={theme.colors['green/400']}>{batchesDispo.length}</NumberCard>
                {batchesDispo.length === 1 ? <NomeEtapa>DISPONÍVEL</NomeEtapa> : <NomeEtapa>DISPONÍVEIS</NomeEtapa>}
              </DataStrongCard>

              <DataStrongCard>
                <NumberCard backgroundColor={theme.colors['yellow/300']}>{batchesAnda.length}</NumberCard>
                <NomeEtapa>ANDAMENTO</NomeEtapa>
              </DataStrongCard>
            </TextBoxCard>
          )}
          {/* ARQUIVAMENTO */}
          {props.fase == 4 && (
            <TextBoxCard>
              <DataStrongCard>
                <NumberCard backgroundColor={theme.colors['green/400']}>{batchesDispo.length}</NumberCard>
                {batchesDispo.length === 1 ? <NomeEtapa>DISPONÍVEL</NomeEtapa> : <NomeEtapa>DISPONÍVEIS</NomeEtapa>}
              </DataStrongCard>
            </TextBoxCard>
          )}
        </CardContainer>
      )}
    </>
  );
};
