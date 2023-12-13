import { useContext, useEffect, useState } from 'react';
import * as S from './styles';
import { useParams } from 'react-router-dom';
import { AssignedUser, GetResponseBatche } from '../../api/services/batches/get-batche/get.interface';
import { useMutation } from 'react-query';
import { PatchBatcheSpecifStatus } from '../../api/services/batches/patch-status-specific';
import toast from 'react-hot-toast';
import { KabanContext } from '../Board';
import theme from '../../global/theme';
//import { ArrowCircleLeft } from '@phosphor-icons/react';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import { PatchBatcheMainStatus } from '../../api/services/batches/patch-status';
import { CheckCircle, HandWaving } from '@phosphor-icons/react';
import { PostAssigners } from '../../api/services/batches/assigners/post-assigners';
import { PostResponseAssigners } from '../../api/services/batches/assigners/post-assigners/post.interface';
import { SharedState } from '../../context/SharedContext';
import { SearchUser } from '../../api/services/batches/assigners/get-user-autocomplete';
import { SearchUserResponseBatche } from '../../api/services/batches/assigners/get-user-autocomplete/get.interface';

interface EspecifModalProps {
  close: () => void;
  batche: GetResponseBatche;
  title: string;
  button: string;
  assigners: AssignedUser[] | undefined;
  //LoteTitle: string;
  setSpecificStatus?: React.Dispatch<React.SetStateAction<number>>;
  setBatche?: React.Dispatch<React.SetStateAction<GetResponseBatche | null>>;
  setStatus?: React.Dispatch<React.SetStateAction<number>>;
}

export const EspecifcModal = (props: EspecifModalProps) => {
  const kanban = useContext(KabanContext);
  const { id } = useParams();
  const { user } = SharedState();
  const [closing, setClosing] = useState(false);
  const [presentAssigners, setPresentAssigners] = useState<AssignedUser[]>(props.assigners ? props.assigners : []);

  useEffect(() => {
    // Ao renderizar o modal, aplicar um escalonamento gradual para exibi-lo
    const timer = setTimeout(() => {
      const modal = document.getElementById('modal-scaling');
      if (closing === false && modal) {
        modal.style.transform = 'scale(1)';
      } else if (modal && closing) {
        modal.style.transform = 'scale(0)';
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [closing]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      props.close();
    }, 300);
  };

  const mutateEspecific = useMutation(PatchBatcheSpecifStatus, {
    onSuccess: () => {
      toast.success('Status atualizado!');
      if (kanban) {
        if (props.batche.specific_status + 1 === 1) {
          kanban.setBatchesDispo((dispo) => dispo.filter((d) => d.id !== props.batche.id));
          kanban.setBatchesAnda((anda) => [...anda, props.batche]);
        } else if (props.batche.specific_status + 1 === 2) {
          kanban.setBatchesAnda((anda) => anda.filter((a) => a.id !== props.batche.id));
          kanban.setBatchesConc((conc) => [
            ...conc,
            { ...props.batche, specific_status: props.batche.specific_status + 1 },
          ]);
        } else {
          console.log('Erro', props.batche.specific_status + 1 === 2);
        }
      }
      if (props.batche.specific_status == 0 && props.setSpecificStatus && props.setBatche) {
        props.setSpecificStatus((e) => (e + 1 === 2 ? 0 : 1));
        props.setBatche({ ...props.batche, specific_status: props.batche.specific_status + 1 });
      } else if (props.batche.specific_status == 1 && props.setBatche && props.setStatus && props.setSpecificStatus) {
        props.setSpecificStatus((e) => (e + 1 === 2 ? 0 : 1));
        props.setStatus((s) => s + 1);
        props.setBatche({
          ...props.batche,
          main_status: props.batche.main_status + 1,
          specific_status: 0,
        });
      }
    },
  });

  const mutateStatus = useMutation(PatchBatcheMainStatus, {
    onSuccess: () => {
      toast.success('Fase atualizada!');
    },
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const users = useMutation(SearchUser, {
    onSuccess: (data: SearchUserResponseBatche) => {
      const usersNiko = data.users;
    },
  });

  const assignMutate = useMutation(PostAssigners, {
    onSuccess: (data: PostResponseAssigners) => {
      toast.success('Mudanças salvas!');
      setPresentAssigners(data.assignedUsers);
      handleClose();
    },
    onError: (error: ApiError) => {
      if (error.response) {
        toast.error(error.response!.data.message);
      }
    },
  });

  const handlePegar = () => {
    const specific_status = props.batche.specific_status + 1 === 2 ? 0 : 1;
    //console.log(specific_status);
    mutateEspecific.mutate({
      specific_status,
      id: props.batche.id,
    });

    // if (user?.id != undefined) {
    //   assignMutate.mutate({
    //     batch_id: id,
    //     assignment_users_ids: user.id,
    //   });
    // }

    handleClose();
    if (specific_status === 0) {
      mutateStatus.mutate({
        id: props.batche.id,
        main_status: props.batche.main_status + 1,
      });
    }
  };

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent>
            <S.NameClose>
              <S.Titulo> {props.title}</S.Titulo>
            </S.NameClose>
            <S.RecusedAvancar>
              <S.Recused onClick={handleClose}>
                <S.Texto>Não, não quero.</S.Texto>
              </S.Recused>

              {props.button === 'Pegar lote' && (
                <S.PegarLoteButton onClick={handlePegar}>
                  <HandWaving size={20} weight="fill" />
                  {/* {props.button === 'Marcar como concluído' && <img src='/finished-icon.svg' />} */}
                  <S.Texto>{props.button}</S.Texto>
                </S.PegarLoteButton>
              )}

              {props.button === 'Marcar como concluído' && (
                <S.ConcluirLoteButton onClick={handlePegar}>
                  <CheckCircle size={24} weight="fill" />
                  <S.Texto style={{ color: theme.colors['gray/900'] }}>{props.button}</S.Texto>
                </S.ConcluirLoteButton>
              )}
            </S.RecusedAvancar>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
