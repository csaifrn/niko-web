import { useState } from 'react';
import * as S from './styles';
import { MinusCircle, PencilSimple } from '@phosphor-icons/react';
import { Observation } from '../../../api/services/batches/get-batche/get.interface';
import theme from '../../../global/theme';
import { SharedState } from '../../../context/SharedContext';

export interface PropsObservation {
  observation: Observation;
  setObservation: (e: Observation) => void;
  setId: (e: string) => void;
  openDelete: () => void;
  openEdit: () => void;
  index: number;
}

export const BoxObservation = ({
  observation,
  openDelete,
  openEdit,
  setId,
  setObservation,
  index,
}: PropsObservation) => {
  const { user } = SharedState();
  const [obs, setObs] = useState(observation);

  const handleClickEdit = () => {
    setId(obs.id);
    setObservation(observation);
    openEdit();
  };

  const handleClickDelete = () => {
    setId(obs.id);
    setObservation(observation);
    openDelete();
  };

  return (
    <>
      <S.ObsDivBlack index={index}>
        <S.BottomContent>
          <p>{observation.created_by.name}</p>
          <S.Data>
            Criado em{' '}
            {new Date(observation.created_at).toLocaleString('pt-br', {
              timeZone: 'America/Sao_paulo',
            })}
          </S.Data>
        </S.BottomContent>
        <S.DivObservation>{observation.observation}</S.DivObservation>
        {observation.created_by.user_id === user?.sub && (
          <S.DivButtons>
            <S.ButtonEdit onClick={handleClickEdit}>
              <PencilSimple size={18} weight="fill" color={theme.colors['white']} />
              <S.ToolTip>Editar</S.ToolTip>
            </S.ButtonEdit>
            <S.ButtonDelete onClick={handleClickDelete}>
              <MinusCircle size={18} weight="fill" color={theme.colors['red/500']} />
              <S.ToolTip>Deletar</S.ToolTip>
            </S.ButtonDelete>
          </S.DivButtons>
        )}
      </S.ObsDivBlack>
    </>
  );
};
