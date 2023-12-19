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
import { validationDigital, validationShelfSchema } from './validation';
import { PatchBatcheEdit, PatchShelfNumber } from '../../api/services/batches/patch-batche';
import { ErrorsForm } from './criar.interface';
import * as Yup from 'yup';
import { ArquivosInput } from '../LoteEdit/style';

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
  const [buttonOff, setButtonOff] = useState(false);

  const [NoCategories, setNoCategories] = useState(false);
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

  const mutateShelf = useMutation(PatchShelfNumber, {
    onSuccess: () => {
      toast.success('Local Adicionado!');
      nextFase();
    },
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const nextFase = async () => {
    if (props.batche.main_status === 4 && props.batche.specific_status) {
      await mutateEspecific.mutate({
        specific_status: props.batche.specific_status + 1,
        id: props.batche.id,
      });
      handleCloseRefecht();
    } else {
      const specific_status = props.batche.specific_status + 1 === 2 ? 0 : 1;
      if (specific_status === 1) {
        await mutateEspecific.mutate({
          specific_status,
          id: props.batche.id,
        });
      }
      if (specific_status === 0) {
        try {
          await mutateStatus.mutate({
            id: props.batche.id,
            main_status: props.batche.main_status + 1,
          });
        } catch {}

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
            await mutateDeleteSettle.mutate({
              id: props.batche.id,
              settlement_project_category_id: [...deleteSettle.map((cat) => cat.id)],
            });
          }
          nextFase();
        } else if (selectedOptions.length > 0 && props.batche.settlement_project_categories.length <= 0) {
          mutateSettle.mutate({
            id: props.batche.id,
            settlementProjectCategories: [...selectedOptions.map((settle) => settle.value)],
          });

          while (mutateSettle.isLoading || mutateSettle.isError || mutateSettle.isSuccess) {
            if (mutateSettle.isSuccess) {
              nextFase();
              break;
            } else if (mutateSettle.isError) {
              toast.error('Tente novamente ocorreu problema com as categorias!');
              handleClose();
              break;
            }
          }
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
    } else if (props.batche.main_status === 2 && props.batche.specific_status === 1) {
      const isValid = await validateDigital();
      if (isValid) {
        await mutatePatchBatch.mutate({
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

            {props.batche.main_status === 2 && props.batche.specific_status == 1 && (
              <>
                <h2>Arquivos Digitais</h2>
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
              {props.button === 'Marcar como concluído' && (
                <S.ConcluirLoteButton disabled={buttonOff} onClick={handlePegar}>
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
                <S.Texto>Cancelar</S.Texto>
              </S.Recused>
            </S.RecusedAvancar>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
