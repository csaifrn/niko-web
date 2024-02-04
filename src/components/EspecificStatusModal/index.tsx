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
import { QueryClasses } from '../../api/services/class/query-classes';
import { ResponseClasses } from '../../api/services/class/query-classes/get.interface';
import { DeleteBatcheSettle, PatchBatcheSettle, PostBatcheSettle } from '../../api/services/batches/patch-settle';
import { DeleteAssigner, DeleteAssigners } from '../../api/services/batches/assigners/delete-assigners';

import { ErrorMessage } from '../../pages/Login/styles';
import { InputText } from '../ModalCriarLote/styles';
import { validationDigital, validationFisical, validationShelfSchema } from './validation';
import { PatchBatcheClassEdit, PatchBatcheEdit } from '../../api/services/batches/patch-batche';
import { ErrorsForm } from './criar.interface';
import * as Yup from 'yup';
import { DeleteBatche } from '../../api/services/batches/delete-batche';
import { useNavigate } from 'react-router';
import ReactLoading from 'react-loading';
import { PostAssigners, PostAssignersMe } from '../../api/services/batches/assigners/post-assigners';

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
  const [shelfNumber, setShelfNumber] = useState<string>(props.batche.storage_location);
  const [userInput, setUserInput] = useState('');
  const [options, setOptions] = useState<Option[]>([]);
  const [newIds, setNewIds] = useState<string[]>([]);
  const [deletedIds, setDeletedIds] = useState<string[]>([]);

  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({
    storage_location: '',
    digital_files_count: '',
    fisical_files_count: '',
  });
  const [selectedOptions, setSelectedOptions] = useState<Option[]>(
    props.batche.class_projects
      ? props.batche.class_projects.map((cat) => ({
          value: cat.id,
          label: cat.name,
        }))
      : [],
  );
  const [digital_files_count, setDigital_files_count] = useState<number>(props.batche.digital_files_count);
  const [fisical_files_count, setFisical_files_count] = useState<number>(props.batche.physical_files_count);

  useEffect(() => {
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

  const settle = (deleteSettle: string[], newSettle: string[]) => {
    console.log(deleteSettle, newSettle);
    if (deleteSettle.length > 0 && newSettle.length === 0) {
      mutateDeleteSettle.mutate({
        id: props.batche.id,
        class_projects_ids: deleteSettle,
      });
    } else if (newSettle.length > 0 && deleteSettle.length === 0) {
      mutateSettle2.mutate({
        id: props.batche.id,
        class_projects_ids: newSettle,
      });
    } else if (newSettle.length > 0 && deleteSettle.length > 0) {
      mutateSettleAll.mutate({
        id: props.batche.id,
        class_projects_ids: newSettle,
        class_projects_deleted_ids: deleteSettle,
      });
    } else {
      nextFase();
    }
  };
  const mutatePatchBatch = useMutation(PatchBatcheEdit, {
    onSuccess: () => {
      nextFase();
    },
  });

  const mutatePatchBatchCat = useMutation(PatchBatcheClassEdit, {
    onSuccess: (_, variables) => {
      settle(variables.deletedIds, variables.newIds);
    },
  });

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
      nextFase();
    },
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const mutateSettleAll = useMutation(PatchBatcheSettle, {
    onSuccess: () => {
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
      navigate(-1);
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
      if (props.batche.assigned_users) {
        mutateDeleteAssigner.mutate({
          batch_id: props.batche.id,
          assignment_user_ids: props.batche.assigned_users.map((u) => u.id),
        });
      }
      toast.success('Fase atualizada!');
    },
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const mutateQueryCategories = useMutation(QueryClasses, {
    onSuccess: (data: ResponseClasses) => {
      setOptions([...data.classes.map((newLocal) => ({ value: newLocal.id, label: newLocal.name }))]);
    },
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const mutateAssigner = useMutation(PostAssignersMe, {
    onSuccess: () => {
      mutateEspecific.mutate({
        specific_status: 1,
        id: props.batche.id,
      });
    },
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const mutateDeleteAssigner = useMutation(DeleteAssigners, {
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
        mutateAssigner.mutate({
          batch_id: props.batche.id,
        });
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

  const validateFisical = async (): Promise<boolean> => {
    try {
      await validationFisical.validate(
        {
          fisical_files_count,
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
          storage_location: shelfNumber,
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
        const validateFisi = await validateFisical();
        if (!validateFisi) {
          setButtonOff(false);
        } else if (
          props.batche.class_projects &&
          props.batche.class_projects.length > 0 &&
          selectedOptions.length > 0 &&
          validateFisi
        ) {
          console.log('Opa');
          const newSettle = selectedOptions.filter(
            (settleSelected) => !props.batche.class_projects.some((settle) => settle.id === settleSelected.value),
          );
          const deleteSettle = props.batche.class_projects.filter(
            (settle) => !selectedOptions.some((settleSelected) => settleSelected.value === settle.id),
          );

          mutatePatchBatchCat.mutate({
            id: props.batche.id,
            physical_files_count: fisical_files_count,
            newIds: newSettle.map((settle) => settle.value),
            deletedIds: deleteSettle.map((settle) => settle.id),
          });
        } else if (
          props.batche.class_projects &&
          selectedOptions.length > 0 &&
          props.batche.class_projects.length <= 0 &&
          validateFisi
        ) {
          console.log('Opa');

          mutatePatchBatchCat.mutate({
            id: props.batche.id,
            physical_files_count: fisical_files_count,
            newIds: selectedOptions.map((opt) => opt.value),
            deletedIds: [],
          });
        } else {
          setError('Adicione alguma categoria para avançar para a próxima fase.');
          setButtonOff(false);
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
                {!NoCategories && (
                  <>
                    <h2 style={{ color: 'white' }}>Arquivos Físicos</h2>
                    <S.ArquivosInput
                      style={{ backgroundColor: theme.colors['gray/700'] }}
                      type="number"
                      name="Arquivos Físicos"
                      placeholder={``}
                      onChange={(e) => setFisical_files_count(Number(e.currentTarget.value))}
                      value={fisical_files_count}
                      min={1}
                    ></S.ArquivosInput>
                    {validationFormError.fisical_files_count && (
                      <ErrorMessage>{validationFormError.fisical_files_count}</ErrorMessage>
                    )}
                    <h2 style={{ color: 'white' }}>Classes</h2>
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
                  </>
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
                {validationFormError.storage_location && (
                  <ErrorMessage>{validationFormError.storage_location}</ErrorMessage>
                )}
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
              {props.batche.main_status >= 2 &&
                props.batche.specific_status === 1 &&
                props.batche.class_projects.length === 0 && (
                  <S.Warn>
                    Não será possível atualizar a fase, pois é necessário adicionar classes. Edite na página de lote.
                  </S.Warn>
                )}
              {props.batche.main_status >= 3 &&
                props.batche.specific_status === 1 &&
                props.batche.digital_files_count === 0 && (
                  <S.Warn>
                    Não será possível atualizar a fase, pois é necessário adicionar arquivos digitais. Edite na página
                    de lote.
                  </S.Warn>
                )}
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
              {/* BOTÃO DE PEGAR LOTE */}
              {props.button === 'Pegar lote' && (
                <S.PegarLoteButton disabled={buttonOff} onClick={handlePegar}>
                  {buttonOff && <ReactLoading type="cylon" color="white" height={100} width={100} />}
                  {!buttonOff && <HandWaving size={20} weight="fill" />}
                  {/* {props.button === 'Marcar como concluído' && <img src='/finished-icon.svg' />} */}
                  <S.Texto>{props.button}</S.Texto>
                </S.PegarLoteButton>
              )}
              {/* BOTÃO DE MARCAR LOTE COMO CONCLUÍDO */}
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
