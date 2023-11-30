import theme from '../../global/theme';
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
  remes?: number;
  dispo?: number;
  anda?: number;
  empausa?: number;
  fase: string;
}
//
export const CardFase = ({ remes = 0, dispo = 0, anda = 0, empausa = 0, ...props }: CardProps) => {
  return (
    <CardContainer href={props.link}>
      <FigureIconCard backgroundColor={props.color}>
        <ImgIconCard src={props.srcImgIcon}></ImgIconCard>
      </FigureIconCard>

      {props.fase == 'Recepcao' && (
        <TextBoxCard>
          <DataStrongCard>
            <NumberCard backgroundColor={theme.colors['green/400']}>{remes}</NumberCard>
            <NomeEtapa>REMESSAS RECEBIDAS</NomeEtapa>
          </DataStrongCard>
        </TextBoxCard>
      )}

      {props.fase == 'Preparo' && (
        <TextBoxCard>
          <DataStrongCard>
            <NumberCard backgroundColor={theme.colors['yellow/300']}>{anda}</NumberCard>
            <NomeEtapa>ANDAMENTO</NomeEtapa>
          </DataStrongCard>

          <DataStrongCard>
            <NumberCard backgroundColor={theme.colors['red/500']}>{empausa}</NumberCard>
            <NomeEtapa>EM PAUSA</NomeEtapa>
          </DataStrongCard>
        </TextBoxCard>
      )}

      {props.fase != 'Preparo' && props.fase != 'Recepcao' && props.fase != 'Arquivamento' && (
        <TextBoxCard>
          <DataStrongCard>
            <NumberCard backgroundColor={theme.colors['green/400']}>{dispo}</NumberCard>
            <NomeEtapa>DISPONÍVEIS</NomeEtapa>
          </DataStrongCard>

          <DataStrongCard>
            <NumberCard backgroundColor={theme.colors['yellow/300']}>{anda}</NumberCard>
            <NomeEtapa>ANDAMENTO</NomeEtapa>
          </DataStrongCard>

          <DataStrongCard>
            <NumberCard backgroundColor={theme.colors['red/500']}>{empausa}</NumberCard>
            <NomeEtapa>EM PAUSA</NomeEtapa>
          </DataStrongCard>
        </TextBoxCard>
      )}

      {props.fase == 'Arquivamento' && (
        <TextBoxCard>
          <DataStrongCard>
            <NumberCard backgroundColor={theme.colors['green/400']}>{dispo}</NumberCard>
            <NomeEtapa>DISPONÍVEIS</NomeEtapa>
          </DataStrongCard>
        </TextBoxCard>
      )}
    </CardContainer>
  );
};
