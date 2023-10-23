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
  id: string;
  index?: number;
  observation: string;
  // eslint-disable-next-line no-unused-vars
  refetch: (Obs: Observation[]) => void;
  observations: Observation[];
}

export const BoxObservation = ({ id, index, observation, refetch, observations }: PropsObservation) => {
  // const [isPresent] = usePresence();
  // const [scope, animate] = useAnimate();
  const [obs, setObs] = useState(observation);
  const [deleteModal, setDeleteModal] = useState(false);
  const [observationModal, setObservationModal] = useState(false);

  const [read, setReadOnly] = useState(false);

  // useEffect(() => {
  //   if (isPresent) {
  //     const enterAnimation = async () => {
  //       await animate(scope.current, { opacity: [0, 1] }, { duration: 0.3, delay: 0.1 * index });
  //     };
  //     enterAnimation();
  //   }
  // }),
  //   [];

  const deleteObs = useMutation(DeleteObservation, {
    onSuccess: (data) => {
      toast.success('Observação excluida');
      refetch(observations.filter((obs) => obs.id != data.id));
    },
    onError: (error: ApiError) => {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    },
  });

  const DeleteObs = (id: string) => {
    deleteObs.mutate({
      id,
    });
  };

  return (
    <>
      <S.ObsDivBlack>
        {obs}
        <S.ButtonEdit
          onClick={() => {
            setObservationModal(!observationModal);
          }}
        >
          <PencilSimple size={24} weight="fill" color={theme.colors['white']} />
          <S.ToolTip>Editar</S.ToolTip>
        </S.ButtonEdit>
        <S.ButtonDelete
          onClick={() => {
            setDeleteModal(!deleteModal);
          }}
        >
          <MinusCircle size={28} weight="fill" color={theme.colors['red/500']} />
          <S.ToolTip>Deletar</S.ToolTip>
        </S.ButtonDelete>
      </S.ObsDivBlack>
      {deleteModal && (
        <DeletarModal
          title="Deletar observação?"
          close={() => setDeleteModal(!deleteModal)}
          deleteFunction={() => DeleteObs(id)}
        />
      )}
      {observationModal && (
        <ObservationModal
          id={id}
          observation={observation}
          refetch={(e: string) => setObs(e)}
          title="Mudar observação"
          close={() => setObservationModal(!observationModal)}
        />
      )}
    </>
  );
};
