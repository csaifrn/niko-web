import { useEffect, useState } from 'react';
import * as S from './styles';
import { useMutation } from 'react-query';
import { PatchBatcheSpecifStatus } from '../../api/services/batches/patch-status-specific';
import toast from 'react-hot-toast';
import theme from '../../global/theme';
//import { ArrowCircleLeft } from '@phosphor-icons/react';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import { PatchBatcheMainStatus } from '../../api/services/batches/patch-status';
import { CustomSelect } from '../AtribuirAlguemModal/style';
import { QuerySettles } from '../../api/services/settlement/query-settlement';
import { ResponseSettle } from '../../api/services/settlement/query-settlement/get.interface';
import { DeleteBatcheSettle, PostBatcheSettle } from '../../api/services/batches/patch-settle';
import { PostAssigners } from '../../api/services/batches/assigners/post-assigners';
import { SharedState } from '../../context/SharedContext';
import { DeleteAssigner } from '../../api/services/batches/assigners/delete-assigners';
import { Batche } from '../../api/services/batches/get-batche/get.interface';
import { ErrorMessage } from '../../pages/Login/styles';
import { InputText } from '../ModalCriarLote/styles';
import { validationShelfSchema } from './validation';
import { PatchBatcheEdit } from '../../api/services/batches/patch-batche';
import { ErrorsForm } from './criar.interface';
import * as Yup from 'yup';

interface EspecifModalProps {
  close: () => void;
  batche: Batche;
  title: string;
  button: string;
  refetch?: () => void;
}

export interface Option {
  value: string;
  label: string;
}

export const EspecifcModal = (props: EspecifModalProps) => {
  const user = SharedState();

  const [closing, setClosing] = useState(false);
  const [NoCategories, setNoCategories] = useState(false);
  const [error, setError] = useState('');
  const [shelfNumber, setShelfNumber] = useState('');
  const [userInput, setUserInput] = useState('');
  const [options, setOptions] = useState<Option[]>([]);
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({
    shelf_number: '',
  });
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

  const handleCloseRefecht = () => {
    setClosing(true);
    setTimeout(() => {
      props.close();
      if (props.refetch) {
        props.refetch();
      }
    }, 300);
  };

  const mutateEspecific = useMutation(PatchBatcheSpecifStatus, {
    onSuccess: () => {},
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

  const mutateDeleteSettle = useMutation(DeleteBatcheSettle, {
    onSuccess: (data) => {},
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const mutateStatus = useMutation(PatchBatcheMainStatus, {
    onSuccess: () => {},
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const mutateQueryCategories = useMutation(QuerySettles, {
    onSuccess: (data: ResponseSettle) => {
      setOptions([...data.categories.map((settle) => ({ value: settle.id, label: settle.name }))]);
    },
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const mutateAssigner = useMutation(PostAssigners, {
    onSuccess: (data) => {},
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const mutateDeleteAssigner = useMutation(DeleteAssigner, {
    onSuccess: (data) => {},
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const mutateShelf = useMutation(PatchBatcheEdit, {
    onSuccess: () => {
      toast.success('Local Adicionado!');
      nextFase();
    },
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const nextFase = () => {
    const specific_status = props.batche.specific_status + 1 === 2 ? 0 : 1;
    if (specific_status === 1) {
      mutateEspecific.mutate({
        specific_status,
        id: props.batche.id,
      });
    }
    if (specific_status === 0) {
      mutateStatus.mutate({
        id: props.batche.id,
        main_status: props.batche.main_status + 1,
      });
      while (mutateStatus.isLoading === true) {
        if (mutateStatus.isError) {
          break;
        } else if (mutateStatus.isSuccess) {
          mutateEspecific.mutate({
            specific_status,
            id: props.batche.id,
          });
          toast.success('Fase atualizada!');
          if (props.batche.assigned_users) {
            props.batche.assigned_users.map((ass) => {
              mutateDeleteAssigner.mutate({
                batch_id: props.batche.id,
                assignment_user_id: ass.id,
              });
            });
          }
        }
      }

      if (mutateDeleteAssigner.isSuccess) {
        toast.success('Usuários removidos!');
      }
    } else if (user.user?.sub && specific_status === 1) {
      mutateAssigner.mutate({
        batch_id: props.batche.id,
        assignment_users_ids: [user.user?.sub],
      });
      toast.success('Status atualizado!');
    }
    handleCloseRefecht();
  };

  const validateShelf = async (): Promise<boolean> => {
    try {
      await validationShelfSchema.validate(
        {
          shelf_number: shelfNumber,
        },
        {
          abortEarly: false,
        },
      );
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = error.inner.reduce<ErrorsForm>((errors, err) => {
          errors[err.path as keyof ErrorsForm] = err.message;
          return errors;
        }, {});
        setValidationFormError(validationErrors);
      }
      return false;
    }
    setValidationFormError({});
    return true;
  };

  const handlePegar = async () => {
    if (props.batche.main_status === 1 && props.batche.specific_status === 1) {
      if (NoCategories) {
        nextFase();
      } else {
        if (props.batche.settlement_project_categories.length > 0 && selectedOptions.length > 0) {
          const newSettle = selectedOptions.filter((settle) => {
            const cat = props.batche.settlement_project_categories.map((cate) => {
              if (cate.id === settle.value) {
                return true;
              }
            });
            if (cat.filter((cat) => cat === undefined).length === cat.length) {
              return settle;
            }
          });

          const deleteSettle = props.batche.settlement_project_categories.filter((categ) => {
            const cat = selectedOptions.map((settle) => {
              if (settle.value === categ.id) {
                return true;
              }
            });
            if (cat.filter((cat) => cat === undefined).length === cat.length) {
              return categ;
            }
          });

          if (newSettle.length > 0) {
            mutateSettle.mutate({
              id: props.batche.id,
              settlementProjectCategories: [...newSettle.map((settle) => settle.value)],
            });
          }

          if (deleteSettle.length > 0) {
            deleteSettle.map((deletedSettle) => {
              mutateDeleteSettle.mutate({
                id: props.batche.id,
                settlement_project_category_id: deletedSettle.id,
              });
            });
          }
          nextFase();
        } else if (selectedOptions.length > 0) {
          mutateSettle.mutate({
            id: props.batche.id,
            settlementProjectCategories: [...selectedOptions.map((settle) => settle.value)],
          });
          nextFase();
        } else {
          setError('Adicione alguma categoria para avançar para a próxima fase.');
        }
      }
    } else if (props.batche.main_status === 3 && props.batche.specific_status === 1) {
      const isValid = await validateShelf();

      if (isValid) {
        mutateShelf.mutate({
          id: props.batche.id,
          shelf_number: shelfNumber,
        });
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
                {/* <S.ButtonNoCategory onClick={() => setNoCategories(!NoCategories)}>
                  {NoCategories ? 'Adicionar' : 'Não adicionar'}
                </S.ButtonNoCategory> */}
                {error && <ErrorMessage>{error}</ErrorMessage>}
              </S.CatalogacaoArea>
            )}

            {props.batche.main_status === 3 && props.batche.specific_status == 1 && (
              <>
                <h2>Estante</h2>
                <InputText
                  placeholder="Estante..."
                  value={shelfNumber}
                  onChange={(e) => setShelfNumber(e.currentTarget.value)}
                />
                {validationFormError.shelf_number && <ErrorMessage>{validationFormError.shelf_number}</ErrorMessage>}
              </>
            )}
            <S.RecusedAvancar>
              {props.button === 'Marcar como concluído' && (
                <S.ConcluirLoteButton onClick={handlePegar}>
                  <img src="/finished-icon.svg" />
                  <S.Texto>{props.button}</S.Texto>
                </S.ConcluirLoteButton>
              )}
              {props.button === 'Pegar lote' && (
                <S.PegarLoteButton onClick={handlePegar}>
                  <img src="/PegarLote_icon.svg" />
                  {/* {props.button === 'Marcar como concluído' && <img src='/finished-icon.svg' />} */}
                  <S.Texto style={{ color: theme.colors['gray/700'] }}>{props.button}</S.Texto>
                </S.PegarLoteButton>
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
