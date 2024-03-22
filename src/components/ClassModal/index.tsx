import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { ErrorMessage } from '../../pages/Login/styles';
import { validationCreateCatSchema } from './validation';
import { useMutation, useQueryClient } from 'react-query';
import * as Yup from 'yup';
import { ErrorsForm, ModalCategoriaProps } from './criar.interface';
import ReactLoading from 'react-loading';
import toast from 'react-hot-toast';
import { CreateClass } from '../../api/services/class/create-class';
import { EditClass } from '../../api/services/class/edit-class';
import theme from '../../global/theme';
import { Class } from '../../api/services/batches/get-batche/get.interface';
import { useCategories } from '../../hooks/useCategories';
import { Input, Slider, SwitchButton } from '../Observation/Observation-modal-update/styles';

export const ClassModal = (props: ModalCategoriaProps) => {
  const queryClient = useQueryClient();
  const [closing, setClosing] = useState(false);
  const [nameClassCreate, setNameClassCreate] = useState<string>('');
  const [nomeCatInput, setNomeCat] = useState<string>(props.nomeCat ? props.nomeCat : '');
  const [priority, setPriority] = useState<boolean>(props.priority ? props.priority : false);
  const [responseError] = useState('');
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({ name: '' });
  const { categories, isLoadingCategories } = useCategories();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const ultimoCaractereCreate = nameClassCreate[nameClassCreate.length - 1];
  const ultimoCaractere = nomeCatInput[nomeCatInput.length - 1];

  const handleSucessCreate = () => {
    setNameClassCreate('');
    queryClient.invalidateQueries('categories');
    handleClose();
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      props.close();
    }, 300);
  };

  const categoryMutation = useMutation(CreateClass, {
    onSettled: (data: any) => {
      if (data) {
        toast.success('Classe criada!');
        queryClient.invalidateQueries('categories');
        handleSucessCreate();
      } else {
        toast.error(data && data.message ? data.message : 'Algum erro ocorreu!');
      }
    },
  });

  const categoryEditMutation = useMutation(EditClass, {
    onSettled: (data: any) => {
      if (data) {
        toast.success('Classe atualizada!');
        setNomeCat('');
        queryClient.invalidateQueries('categories');
        handleClose();
      }
      // else {
      //   toast.error(data && data.message ? data.message : 'Ops esse nome de classe já está em uso!');
      // }
    },
  });

  const validateFormCreate = async (): Promise<boolean> => {
    try {
      await validationCreateCatSchema.validate(
        {
          nameClassCreate,
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

  const validateFormEdit = async (): Promise<boolean> => {
    try {
      await validationCreateCatSchema.validate(
        {
          name: nomeCatInput,
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

  const onSubmitCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await validateFormCreate();
    if (isValid) {
      categoryMutation.mutate({
        name: nameClassCreate,
      });
    }
  };

  const onSubmitEditar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await validateFormEdit();
    if (isValid) {
      categoryEditMutation.mutate({
        id: props.id,
        name: nomeCatInput,
        priority: priority,
      });
    }
    if (nomeCatInput == props.nomeCat) {
      categoryEditMutation.mutate({
        id: props.id,
        priority: priority,
      });
    }
  };

  const removeDiacritics = (str: string): string => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const filteredCat = !isLoadingCategories
    ? categories?.filter((cat: Class) => {
        const catName = removeDiacritics(cat.name.toLowerCase());
        const search = removeDiacritics(searchTerm.toLowerCase());
        return catName.includes(search);
      })
    : [];

  const sortedCategories = filteredCat?.sort((a: Class, b: Class) => {
    const nameA = removeDiacritics(a.name.toLowerCase());
    const nameB = removeDiacritics(b.name.toLowerCase());
    return nameA.localeCompare(nameB);
  });

  const sortedAndFilteredCategories = sortedCategories?.sort((a: Class, b: Class) => {
    return a.name.localeCompare(b.name);
  });

  const Categorias = sortedAndFilteredCategories?.map((cat: Class) => {
    return cat.name;
  });

  const handlePriority = () => {
    setPriority(!priority);
  };

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

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent>
            {/* CRIAR classe */}
            {props.title === 'Criar classe' && (
              <S.ModalContent>
                <S.NameClose>
                  <h2>{props.title}</h2>
                  <S.Exit type="button" onClick={handleClose}>
                    <img src="/buttonclose.svg" alt="" height={18} width={18} />
                  </S.Exit>
                </S.NameClose>

                <S.FormCriar onSubmit={onSubmitCreate}>
                  <S.InputText
                    placeholder="Nome da classe..."
                    onChange={(e) => setNameClassCreate(e.currentTarget.value)}
                    value={nameClassCreate}
                    name="name"
                    className="name"
                  />
                  {Categorias?.includes(nameClassCreate) && (
                    <p style={{ color: theme.colors['red/400'] }}>Já existe uma classe com este nome.</p>
                  )}

                  {nameClassCreate.length < 3 && categoryMutation.isSuccess == false && (
                    <p style={{ color: theme.colors['red/400'] }}>
                      O nome da classe precisa ter ao menos 3 caracteres.
                    </p>
                  )}

                  {/* Mensagem de erro */}
                  {ultimoCaractereCreate == ' ' && (
                    <p style={{ color: theme.colors['red/400'] }}>
                      O nome da classe não pode terminar com espaço(s) em branco
                    </p>
                  )}

                  {validationFormError.name && <ErrorMessage>{validationFormError.name}</ErrorMessage>}
                  {categoryMutation.isLoading ? (
                    <S.Criar type="submit" disabled>
                      <ReactLoading type="cylon" color="white" height={30} width={30} />
                    </S.Criar>
                  ) : Categorias?.includes(nameClassCreate) ||
                    nameClassCreate.length < 3 ||
                    ultimoCaractereCreate == ' ' ? (
                    <S.CriarDesativado type="submit" disabled>
                      Criar classe
                    </S.CriarDesativado>
                  ) : (
                    <S.Criar type="submit">Criar classe</S.Criar>
                  )}
                  {responseError && <ErrorMessage>{responseError}</ErrorMessage>}
                </S.FormCriar>
              </S.ModalContent>
            )}

            {/* EDITAR classe */}
            {props.title === 'Editar classe' && (
              <S.ModalContent>
                <S.NameClose>
                  <h2>{props.title}</h2>
                  <S.Exit type="button" onClick={handleClose}>
                    <img src="/buttonclose.svg" alt="" height={18} width={18} />
                  </S.Exit>
                </S.NameClose>
                <S.FormCriar onSubmit={onSubmitEditar}>
                  <S.InputText
                    placeholder="Nome da classe..."
                    onChange={(e) => setNomeCat(e.currentTarget.value)}
                    value={nomeCatInput}
                  />

                  {/* Mensagem de erro */}
                  {Categorias?.includes(nomeCatInput) && nomeCatInput != props.nomeCat && (
                    <p style={{ color: theme.colors['red/400'] }}>Já existe uma classe com este nome.</p>
                  )}

                  {/* Mensagem de erro */}
                  {nomeCatInput.length < 3 && categoryEditMutation.isSuccess == false && (
                    <p style={{ color: theme.colors['red/400'] }}>
                      O nome da classe precisa ter ao menos 3 caracteres.
                    </p>
                  )}

                  {/* Mensagem de erro */}
                  {ultimoCaractere == ' ' && (
                    <p style={{ color: theme.colors['red/400'] }}>
                      O nome da classe não pode terminar com espaço(s) em branco
                    </p>
                  )}

                  {/* Mensagem de erro */}
                  {validationFormError.name && <ErrorMessage>{validationFormError.name}</ErrorMessage>}

                  {/* Marcar/desmarcar prioridade */}
                  <h3>Prioridade</h3>
                  <SwitchButton>
                    <Input checked={priority} onChange={handlePriority} />
                    <Slider />
                  </SwitchButton>

                  {categoryEditMutation.isLoading ? (
                    <S.Criar type="submit" disabled>
                      <ReactLoading type="cylon" color="white" height={30} width={30} />
                    </S.Criar>
                  ) : (Categorias?.includes(nomeCatInput) && nomeCatInput != props.nomeCat) ||
                    nomeCatInput.length < 3 ||
                    ultimoCaractere == ' ' ? (
                    <S.CriarDesativado type="submit" disabled>
                      Editar classe
                    </S.CriarDesativado>
                  ) : (
                    <S.Criar type="submit">Editar classe</S.Criar>
                  )}
                </S.FormCriar>
              </S.ModalContent>
            )}
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};
