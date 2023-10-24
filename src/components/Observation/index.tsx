import { useEffect, useState } from 'react';
import * as S from './styles';
import { Gear, MinusCircle, Pen, PencilSimple } from '@phosphor-icons/react';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import { DeleteObservation } from '../../api/services/batches/observation/delete-obsevation';
import theme from '../../global/theme';
import { useAnimate, usePresence } from 'framer-motion';
import { Observation } from '../../api/services/batches/get-batche/get.interface';
import { DeletarModal } from '../DeletarModal';
import { ObservationModal } from './Observation-modal-update';

export interface PropsObservation {
  index?: number;
  observation: Observation;
  // eslint-disable-next-line no-unused-vars
  refetch: (Obs: Observation[]) => void;
  observations: Observation[];
  setObservation: (e: Observation) => void;
  setId: (e: string) => void;
  openDelete: () => void;
  openEdit: () => void;
}

export const BoxObservation = ({
  index,
  observation,
  refetch,
  observations,
  openDelete,
  openEdit,
  setId,
  setObservation,
}: PropsObservation) => {
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
        {obs.observation}
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
