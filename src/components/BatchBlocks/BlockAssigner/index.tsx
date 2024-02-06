import { X } from '@phosphor-icons/react';
import { AssignedUser } from '../../../api/services/batches/get-batche/get.interface';
import * as S from './styles';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { useParams } from 'react-router-dom';
import { DeleteAssigner } from '../../../api/services/batches/assigners/delete-assigners';
import { DeletarModal } from '../../DeletarModal';
import { useState } from 'react';
import { SharedState } from '../../../context/SharedContext';
import { UserRole } from '../../../utils/userRole.enum';
import { PatchBatcheSpecifStatus } from '../../../api/services/batches/patch-status-specific';
import { ApiError } from '../../../api/services/authentication/signIn/signIn.interface';

interface PropsBlockAssigner {
  assigner: AssignedUser;
  setAssigners: React.Dispatch<React.SetStateAction<AssignedUser[]>>;
  BatcheAssigners: AssignedUser[];
  refetch: () => void;
}

export const BlockAssigner = ({ assigner, setAssigners, BatcheAssigners, refetch }: PropsBlockAssigner) => {
  const { id } = useParams();
  const { user, setUser } = SharedState();
  const [modal, setModal] = useState(false);

  const mutateEspecific = useMutation(PatchBatcheSpecifStatus, {
    onSuccess: () => {
      refetch();
    },
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const removeAssigner = useMutation(DeleteAssigner, {
    onSuccess: () => {
      toast.success(`Você removeu ${assigner.name} do lote.`);
      setAssigners((ass) => ass.filter((a) => a.id != assigner.id));
      if (id && BatcheAssigners.filter((a) => a.id != assigner.id).length == 0) {
        mutateEspecific.mutate({
          specific_status: 0,
          id: id,
        });
      }
    },
  });

  const Remove = () => {
    if (id && assigner) {
      removeAssigner.mutate({
        batch_id: id,
        assignment_user_id: assigner.id,
      });
    }
  };

  return (
    <>
      <S.BlockAssigner style={{ padding: user?.role === UserRole.MANAGER ? '0 0 0 0.5em' : '0.5em' }}>
        {/* mostra quem está atribuído */}
        {/* {user?.name == assigner.name &&
          <S.NameAssigner>Você</S.NameAssigner>
        }
        {user?.name != assigner.name &&
          <S.NameAssigner>{assigner.name}</S.NameAssigner>
        } */}
        <S.NameAssigner>{assigner.name}</S.NameAssigner>
        {user?.role === UserRole.MANAGER && (
          <S.DeleteAssigner onClick={() => setModal(!modal)}>
            <X size={14} weight="bold" />
          </S.DeleteAssigner>
        )}
      </S.BlockAssigner>

      {modal && (
        <DeletarModal
          close={() => setModal(!modal)}
          title={`Deseja remover ${assigner.name} desse lote?`}
          deleteFunction={Remove}
        />
      )}
    </>
  );
};
