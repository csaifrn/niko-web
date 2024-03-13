import { X } from '@phosphor-icons/react';
import { BatcheAssignedUser } from '../../../api/services/batches/get-batche/get.interface';
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
import theme from '../../../global/theme';

interface PropsBlockAssigner {
  assigner: BatcheAssignedUser;
  setAssigners: React.Dispatch<React.SetStateAction<BatcheAssignedUser[]>>;
  BatcheAssigners: BatcheAssignedUser[];
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
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Não foi possível remover esse usuário do lote');
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

  function getInitials(name: string): string {
    const nameParts = name.split(' ');
    let initials = '';

    for (let i = 0; i < Math.min(nameParts.length, 2); i++) {
      const part = nameParts[i];
      if (part.length > 0) {
        initials += part[0];
      }
    }

    return initials;
  }

  const IconInitials = getInitials(assigner.name);

  return (
    <>
      <S.BlockAssigner>
        {/* mostra quem está atribuído */}
        {/* {user?.name == assigner.name &&
          <S.NameAssigner>Você</S.NameAssigner>
        }
        {user?.name != assigner.name &&
          <S.NameAssigner>{assigner.name}</S.NameAssigner>
        } */}

        <S.ConteudoBlockAssigner>
          {assigner.photo ? (
            <S.PhotoAssigner src={assigner.photo} />
          ) : (
            <S.BlackBlock
              style={{
                borderRadius: '100%',
                width: `36px`,
                height: `36px`,
                padding: '0',
                backgroundColor: `${theme.colors['gray/500']}`,
              }}
            >
              <p style={{ fontSize: `20px`, color: theme.colors['white'], fontFamily: 'Rubik' }}>{IconInitials}</p>
            </S.BlackBlock>
          )}
          {assigner.name == user?.name ? (
            <S.NameAssigner>{assigner.name}(você)</S.NameAssigner>
          ) : (
            <S.NameAssigner>{assigner.name}</S.NameAssigner>
          )}
        </S.ConteudoBlockAssigner>

        {user?.role == UserRole.MANAGER || user?.name == assigner.name ? (
          <S.DeleteAssigner onClick={() => setModal(!modal)}>
            <X size={14} weight="bold" />
          </S.DeleteAssigner>
        ) : (
          ''
        )}
      </S.BlockAssigner>

      {modal && (
        <DeletarModal
          close={() => setModal(!modal)}
          title={
            assigner.name == user?.name ? 'Deseja sair desse lote?' : `Deseja remover ${assigner.name} desse lote?`
          }
          redButtonTitle={assigner.name == user?.name ? 'Sair' : 'Remover'}
          deleteFunction={Remove}
        />
      )}
    </>
  );
};
