import {useEffect, useState } from 'react';
import * as S from './styles';
import { AssignedUser, GetResponseBatche } from '../../api/services/batches/get-batche/get.interface';
import { useMutation } from 'react-query';
import { PatchBatcheSpecifStatus } from '../../api/services/batches/patch-status-specific';
import toast from 'react-hot-toast';
import theme from '../../global/theme';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import { PatchBatcheMainStatus } from '../../api/services/batches/patch-status';
import { CheckCircle, HandWaving } from '@phosphor-icons/react';
import { SharedState } from '../../context/SharedContext';
import { CustomSelect } from '../AtribuirAlguemModal/style';
import { QuerySettles } from '../../api/services/settlement/query-settlement';
import { ResponseSettle } from '../../api/services/settlement/query-settlement/get.interface';
import { PostBatcheSettle } from '../../api/services/batches/patch-settle';
import { PostAssigners } from '../../api/services/batches/assigners/post-assigners';
import { DeleteAssigner } from '../../api/services/batches/assigners/delete-assigners';
import { Batche } from '../../api/services/batches/get-batche/get.interface';

interface EspecifModalProps {
  close: () => void;
  refetch?: () => void;
  batche: Batche;
  title: string;
  button: string;
  assigners: AssignedUser[] | undefined;
  //LoteTitle: string;
  setSpecificStatus?: React.Dispatch<React.SetStateAction<number>>;
  setBatche?: React.Dispatch<React.SetStateAction<GetResponseBatche | null>>;
  setStatus?: React.Dispatch<React.SetStateAction<number>>;
}

// export const EspecifcModal = (props: EspecifModalProps) => {
//   const kanban = useContext(KabanContext);
//   const { id } = useParams();
//   const { user } = SharedState();
//   const [closing, setClosing] = useState(false);
//   const [presentAssigners, setPresentAssigners] = useState<AssignedUser[]>(props.assigners ? props.assigners : []);
//   refetch?: () => void;
// }

interface Option {
  value: string;
  label: string;
}

export const EspecifcModal = (props: EspecifModalProps) => {
  const user = SharedState();

  const [closing, setClosing] = useState(false);
  const [NoCategories, setNoCategories] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([
    ...props.batche.settlement_project_categories.map((cat) => ({
      value: cat.id,
      label: cat.name,
    })),
  ]);

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
      if (props.refetch) {
        props.refetch();
      }
    },
    onError: (err: ApiError) => {
      console.log('esp');
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const mutateSettle = useMutation(PostBatcheSettle, {
    onSuccess: (data) => {},
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const mutateStatus = useMutation(PatchBatcheMainStatus, {
    onSuccess: () => {
      if (props.refetch) {
        props.refetch();
      }
    },
    onError: (err: ApiError) => {
      console.log('main');
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const mutateQueryCategories = useMutation(QuerySettles, {
    onSuccess: (data: ResponseSettle) => {
      setOptions([...data.categories.map((settle) => ({ value: settle.id, label: settle.name }))]);
    },
  });

  const mutateAssigner = useMutation(PostAssigners, {
    onSuccess: (data) => {},
  });

  const mutateDeleteAssigner = useMutation(DeleteAssigner, {
    onSuccess: (data) => {},
  });

  const nextFase = () => {
    const specific_status = props.batche.specific_status + 1 === 2 ? 0 : 1;
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
      if (props.batche.assigned_users) {
        props.batche.assigned_users.map((ass) => {
          mutateDeleteAssigner.mutate({
            batch_id: props.batche.id,
            assignment_user_id: ass.id,
          });
        });
      }
      if (mutateDeleteAssigner.isSuccess) {
        toast.success('Usuários removidos!');
      }
      toast.success('Fase atualizada!');
    } else if (user.user?.sub && specific_status === 1) {
      mutateAssigner.mutate({
        batch_id: props.batche.id,
        assignment_users_ids: [user.user?.sub],
      });
      toast.success('Status atualizado!');
    }
    handleClose();
  };

  const handlePegar = () => {
    if (props.batche.main_status === 1 && props.batche.specific_status === 2) {
      if (NoCategories) {
        nextFase();
      } else {
        mutateSettle.mutate({
          id: props.batche.id,
          settlementProjectCategories: [...selectedOptions.map((opt) => opt.value)],
        });
        if (mutateSettle.isSuccess) {
          nextFase();
        }
      }
    } else {
      nextFase();
    }
  };

  useEffect(() => {
    if (userInput.length >= 3) {
      mutateQueryCategories.mutate({
        name: userInput,
      });
    }
  }, [userInput]);

  const onRemove = (e: any) => {
    if (e) {
      setSelectedOptions((settles) => settles.filter((settle) => settle.value != e.value));
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
            {props.batche.main_status === 1 && props.batche.specific_status == 1 && (
              <S.CatalogacaoArea>
                <h3>Adicionar categorias</h3>
                {!NoCategories && (
                  <CustomSelect
                    isMulti
                    // eslint-disable-next-line jsx-a11y/no-autofocus
                    autoFocus
                    placeholder={'Digite no mínimo 3 caracteres...'}
                    name="colors"
                    className="react-select-container"
                    classNamePrefix="react-select"
                    onInputChange={setUserInput}
                    inputValue={userInput}
                    onChange={(e: any, action: any) => {
                      // eslint-disable-next-line no-constant-condition
                      if ((action.action = 'remove-value')) {
                        onRemove(action.removedValue);
                      }

                      setSelectedOptions(e);
                    }}
                    options={options}
                    value={selectedOptions}
                    isLoading={mutateQueryCategories.isLoading}
                    required
                  />
                )}
                <S.ButtonNoCategory onClick={() => setNoCategories(!NoCategories)}>
                  {NoCategories ? 'Adicionar' : 'Não adicionar'}
                </S.ButtonNoCategory>
              </S.CatalogacaoArea>
            )}
            <S.RecusedAvancar>
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
              <S.Recused onClick={handleClose}>
                <S.Texto>Não, não quero.</S.Texto>
              </S.Recused>
            </S.RecusedAvancar>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
