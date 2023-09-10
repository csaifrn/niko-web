import { CardContainer, DataStrongCard, FigureIconCard, ImgIconCard, NumberCard, TextBoxCard } from './styles';

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
            <NumberCard backgroundColor="#43DB6D">{remes}</NumberCard>
            <p>REMESSAS RECEBIDAS</p>
          </DataStrongCard>
        </TextBoxCard>
      )}
      {props.fase == 'Preparo' && (
        <TextBoxCard>
          <DataStrongCard>
            <NumberCard backgroundColor="#FCDE42">{anda}</NumberCard>
            <p>ANDAMENTO</p>
          </DataStrongCard>

          <DataStrongCard>
            <NumberCard backgroundColor="#F32D2D">{empausa}</NumberCard>
            <p>EM PAUSA</p>
          </DataStrongCard>
        </TextBoxCard>
      )}
      {props.fase != 'Preparo' && props.fase != 'Recepcao' && props.fase != 'Arquivamento' && (
        <TextBoxCard>
          <DataStrongCard>
            <NumberCard backgroundColor="#43DB6D">{dispo}</NumberCard>
            <p>DISPONÍVEIS</p>
          </DataStrongCard>

          <DataStrongCard>
            <NumberCard backgroundColor="#FCDE42">{anda}</NumberCard>
            <p>ANDAMENTO</p>
          </DataStrongCard>

          <DataStrongCard>
            <NumberCard backgroundColor="#F32D2D">{empausa}</NumberCard>
            <p>EM PAUSA</p>
          </DataStrongCard>
        </TextBoxCard>
      )}
      {props.fase == 'Arquivamento' && (
        <TextBoxCard>
          <DataStrongCard>
            <NumberCard backgroundColor="#43DB6D">{dispo}</NumberCard>
            <p>DISPONÍVEIS</p>
          </DataStrongCard>
        </TextBoxCard>
      )}
    </CardContainer>
  );
};
// teste
