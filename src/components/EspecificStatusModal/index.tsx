import { useEffect, useState } from 'react';
import * as S from './styles';
import { Batche } from '../../api/services/batches/get-batche/get.interface';
import { useMutation } from 'react-query';
import { PatchBatcheSpecifStatus } from '../../api/services/batches/patch-status-specific';
import toast from 'react-hot-toast';
import theme from '../../global/theme';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import { PatchBatcheMainStatus } from '../../api/services/batches/patch-status';
import { CheckCircle, HandWaving, Trash } from '@phosphor-icons/react';
import { SharedState } from '../../context/SharedContext';
import { CustomSelect } from '../AtribuirAlguemModal/style';
import { QuerySettles } from '../../api/services/settlement/query-settlement';
import { ResponseSettle } from '../../api/services/settlement/query-settlement/get.interface';
import { DeleteBatcheSettle, PatchBatcheSettle, PostBatcheSettle } from '../../api/services/batches/patch-settle';
import { DeleteAssigner } from '../../api/services/batches/assigners/delete-assigners';

import { ErrorMessage } from '../../pages/Login/styles';
import { InputText } from '../ModalCriarLote/styles';
import { validationDigital, validationShelfSchema } from './validation';
import { PatchBatcheEdit } from '../../api/services/batches/patch-batche';
import { ErrorsForm } from './criar.interface';
import * as Yup from 'yup';
import { DeleteBatche } from '../../api/services/batches/delete-batche';
import { useNavigate } from 'react-router';
import ReactLoading from 'react-loading';

interface EspecifModalProps {
  close: () => void;
  refetch?: () => void;
  batche: Batche;
  title: string;
  button: string;
  FaseAtual?: string;
}

export interface Option {
  value: string;
  label: string;
}

export const EspecifcModal = (props: EspecifModalProps) => {
  const user = SharedState();
  const navigate = useNavigate();
  const [closing, setClosing] = useState(false);
  const [buttonOff, setButtonOff] = useState(false);
  const [NoCategories] = useState(false);
  const [error, setError] = useState('');
  const [shelfNumber, setShelfNumber] = useState('');
  const [userInput, setUserInput] = useState('');
  const [options, setOptions] = useState<Option[]>([]);
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({
    shelf_number: '',
    digital_files_count: '',
  });
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([
    ...props.batche.settlement_project_categories.map((cat) => ({
      value: cat.id,
      label: cat.name,
    })),
  ]);
  const [digital_files_count, setDigital_files_count] = useState<number>(0);

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

  const mutatePatchBatch = useMutation(PatchBatcheEdit, {});

  const mutateEspecific = useMutation(PatchBatcheSpecifStatus, {
    onSuccess: () => {},
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const mutateSettle = useMutation(PostBatcheSettle, {
    onSuccess: () => {
      nextFase();
    },
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const mutateSettle2 = useMutation(PostBatcheSettle, {
    onSuccess: () => {
      console.log('Deu bom');
    },
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const mutateSettleAll = useMutation(PatchBatcheSettle, {
    onSuccess: () => {
      console.log('Deu bom');
      nextFase();
    },
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const mutateDeleteSettle = useMutation(DeleteBatcheSettle, {
    onSuccess: () => {},
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const DeleteBatch = useMutation(DeleteBatche, {
    onSuccess: () => {
      navigate(`/Fase/:id/Board/Preparo`);
      toast.success('Lote excluído com sucesso!');
      console.log('Lote excluído com sucesso!');
    },
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const ExcluirLote = () => {
    DeleteBatch.mutate({
      id: props.batche.id,
    });
  };

  const mutateStatus = useMutation(PatchBatcheMainStatus, {
    onSuccess: () => {
      mutateEspecific.mutate({
        specific_status: 0,
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
    },
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

  //forbiden - only manager can mutateAssigner (error: Forbiden)
  //solutions - api does the assignation to the batche or he opens this operation

  const mutateDeleteAssigner = useMutation(DeleteAssigner, {
    onSuccess: () => {},
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const mutateStorage = useMutation(PatchBatcheEdit, {
    onSuccess: () => {
      nextFase();
    },
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const nextFase = async () => {
    if (props.batche.main_status === 4 && props.batche.specific_status) {
      mutateEspecific.mutate({
        specific_status: props.batche.specific_status + 1,
        id: props.batche.id,
      });
      handleCloseRefecht();
    } else {
      const specific_status = props.batche.specific_status + 1 === 2 ? 0 : 1;
      if (specific_status === 1) {
        mutateEspecific.mutate({
          specific_status,
          id: props.batche.id,
        });
      }

      if (specific_status === 0) {
        try {
          mutateStatus.mutate({
            id: props.batche.id,
            main_status: props.batche.main_status + 1,
          });
        } catch (err) {
          console.warn(err);
        }
      } else if (user.user?.sub && specific_status === 1) {
        toast.success('Status atualizado!');
      }
      handleCloseRefecht();
    }
  };

  const validateDigital = async (): Promise<boolean> => {
    try {
      await validationDigital.validate(
        {
          digital_files_count,
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
    setButtonOff(true);
    if (props.batche.main_status === 1 && props.batche.specific_status === 1) {
      if (NoCategories) {
        nextFase();
      } else {
        if (props.batche.settlement_project_categories.length > 0 && selectedOptions.length > 0) {
          const newSettle = selectedOptions.filter(
            (settleSelected) =>
              !props.batche.settlement_project_categories.some((settle) => settle.id === settleSelected.value),
          );
          const deleteSettle = props.batche.settlement_project_categories.filter(
            (settle) => !selectedOptions.some((settleSelected) => settleSelected.value === settle.id),
          );

          const newIds = newSettle.map((settle) => settle.value);
          const deleteIds = deleteSettle.map((settle) => settle.id);

          if (deleteSettle.length > 0 && newSettle.length === 0) {
            mutateDeleteSettle.mutate({
              id: props.batche.id,
              settlement_project_category_ids: deleteIds,
            });
          } else if (newSettle.length > 0 && deleteSettle.length === 0) {
            mutateSettle2.mutate({
              id: props.batche.id,
              settlementProjectCategories: newIds,
            });
          } else if (newSettle.length > 0 && deleteSettle.length > 0) {
            mutateSettleAll.mutate({
              id: props.batche.id,
              settlementProjectCategories: newIds,
              settlement_project_category_ids: deleteIds,
            });
          }

          nextFase();
        } else if (selectedOptions.length > 0 && props.batche.settlement_project_categories.length <= 0) {
          mutateSettle.mutate({
            id: props.batche.id,
            settlementProjectCategories: [...selectedOptions.map((settle) => settle.value)],
          });
        } else {
          setError('Adicione alguma categoria para avançar para a próxima fase.');
        }
      }
    } else if (props.batche.main_status === 4 && props.batche.specific_status === 1) {
      const isValid = await validateShelf();

      if (isValid) {
        mutateStorage.mutate({
          id: props.batche.id,
          storage_location: shelfNumber,
        });
      }
    } else if (props.batche.main_status === 2 && props.batche.specific_status === 1) {
      const isValid = await validateDigital();
      if (isValid) {
        mutatePatchBatch.mutate({
          id: props.batche.id,
          digital_files_count,
        });
        nextFase();
      }
    } else {
      nextFase();
    }
    setButtonOff(false);
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
            {props.batche.main_status === 1 && props.batche.specific_status == 1 && props.button !== 'Excluir lote' && (
              <S.CatalogacaoArea>
                <h3 style={{ color: 'white' }}>Adicionar categorias</h3>
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

            {props.batche.main_status === 4 && props.batche.specific_status == 1 && props.button !== 'Excluir lote' && (
              <>
                <h2 style={{ color: 'white' }}>Estante</h2>
                <InputText
                  placeholder="Estante..."
                  value={shelfNumber}
                  onChange={(e) => setShelfNumber(e.currentTarget.value)}
                />
                {validationFormError.shelf_number && <ErrorMessage>{validationFormError.shelf_number}</ErrorMessage>}
              </>
            )}

            {props.batche.main_status === 2 && props.batche.specific_status == 1 && props.button !== 'Excluir lote' && (
              <>
                <h2 style={{ color: 'white' }}>Arquivos Digitais</h2>
                <S.ArquivosInput
                  style={{ backgroundColor: theme.colors['gray/700'] }}
                  type="number"
                  name="Arquivos digitais"
                  placeholder={``}
                  onChange={(e) => setDigital_files_count(Number(e.currentTarget.value))}
                  value={digital_files_count}
                  min={1}
                ></S.ArquivosInput>
                {validationFormError.digital_files_count && (
                  <ErrorMessage>{validationFormError.digital_files_count}</ErrorMessage>
                )}
              </>
            )}

            <S.RecusedAvancar>

              {/* Cancelar */}
              <S.Recused onClick={handleClose}>
                <S.Texto>Cancelar</S.Texto>
              </S.Recused>

              {/* Botão de excluir lote */}
              {props.button === 'Excluir lote' && (
                <S.ExcluirLoteButton onClick={() => ExcluirLote()}>
                  <Trash size={20} weight="fill" />
                  {/* {props.button === 'Marcar como concluído' && <img src='/finished-icon.svg' />} */}
                  <S.Texto>{props.button}</S.Texto>
                </S.ExcluirLoteButton>
              )}

              {props.button === 'Pegar lote' && (
                <S.PegarLoteButton disabled={buttonOff} onClick={handlePegar}>
                  {buttonOff && <ReactLoading type="cylon" color="white" height={100} width={100} />}
                  {!buttonOff && <HandWaving size={20} weight="fill" />}
                  {/* {props.button === 'Marcar como concluído' && <img src='/finished-icon.svg' />} */}
                  <S.Texto>{props.button}</S.Texto>
                </S.PegarLoteButton>
              )}

              {props.button === 'Marcar como concluído' && (
                <S.ConcluirLoteButton disabled={buttonOff} onClick={handlePegar}>
                  {buttonOff && <ReactLoading type="cylon" color="white" height={100} width={100} />}
                  {!buttonOff && (
                    <>
                      <CheckCircle size={24} weight="fill" />
                      <S.Texto style={{ color: theme.colors['gray/900'] }}>{props.button}</S.Texto>
                    </>
                  )}
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
