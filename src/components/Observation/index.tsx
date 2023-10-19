import React, { useEffect } from 'react';
import * as S from './styles';
import { Minus } from '@phosphor-icons/react';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import { DeleteObservation } from '../../api/services/batches/observation/delete-obsevation';
import theme from '../../global/theme';
import { useAnimate, usePresence } from 'framer-motion';
import { Observation } from '../../api/services/batches/get-batche/get.interface';

interface PropsObservation {
  id: string;
  index: number;
  observation: string;
  // eslint-disable-next-line no-unused-vars
  refetch: (Obs: Observation[]) => void;
  observations: Observation[];
}

export const BoxObservation = ({ id, index, observation, refetch, observations }: PropsObservation) => {
  const [isPresent] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(scope.current, { opacity: [0, 1] }, { duration: 0.3, delay: 0.1 * index });
      };
      enterAnimation();
    }
  }),
    [];

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
    <S.ObsDivBlack ref={scope}>
      {observation}
      <button
        onClick={() => {
          DeleteObs(id);
        }}
        style={{
          backgroundColor: 'transparent',
          height: '24px',
          width: '24px',
          border: 'none',
        }}
      >
        <Minus size={24} weight="fill" color={theme.colors['red/500']} />
      </button>
    </S.ObsDivBlack>
  );
};
