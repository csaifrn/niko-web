import { useState } from 'react';
import * as S from './styles';
import { MinusCircle, PencilSimple } from '@phosphor-icons/react';
import { Observation } from '../../../api/services/batches/get-batche/get.interface';
import theme from '../../../global/theme';

export interface PropsObservation {
  observation: Observation;
  setObservation: (e: Observation) => void;
  setId: (e: string) => void;
  openDelete: () => void;
  openEdit: () => void;
}

export const BoxObservation = ({ observation, openDelete, openEdit, setId, setObservation }: PropsObservation) => {
  const [obs, setObs] = useState(observation);

  const handleClickEdit = () => {
    setId(obs.id);
    setObservation(obs);
    openEdit();
  };

  const handleClickDelete = () => {
    setId(obs.id);
    setObservation(obs);
    openDelete();
  };

  return (
    <>
      <S.ObsDivBlack>
        {observation.observation}
        <S.ButtonEdit onClick={handleClickEdit}>
          <PencilSimple size={24} weight="fill" color={theme.colors['white']} />
          <S.ToolTip>Editar</S.ToolTip>
        </S.ButtonEdit>
        <S.ButtonDelete onClick={handleClickDelete}>
          <MinusCircle size={28} weight="fill" color={theme.colors['red/500']} />
          <S.ToolTip>Deletar</S.ToolTip>
        </S.ButtonDelete>
      </S.ObsDivBlack>
    </>
  );
};
