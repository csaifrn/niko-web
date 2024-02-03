import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { ErrorMessage } from '../../pages/Login/styles';
import { validationCreateCatSchema } from './validation';
import { useMutation, useQueryClient } from 'react-query';
import * as Yup from 'yup';
import { ErrorsForm, ModalCategoriaProps } from './criar.interface';
import ReactLoading from 'react-loading';
import toast from 'react-hot-toast';
import { CreateCategory } from '../../api/services/categoria/create-class';
import { EditCategory } from '../../api/services/categoria/edit-class';
import theme from '../../global/theme';
import { Class } from '../../api/services/batches/get-batche/get.interface';
import { useCategories } from '../../hooks/useCategories';

export const ModalCategory = (props: ModalCategoriaProps) => {
  const queryClient = useQueryClient();
  const [closing, setClosing] = useState(false);
  const [name, setName] = useState<string>('');
  const [nomeCat, setNomeCat] = useState<string>(props.nomeCat ? props.nomeCat : '');
  const [responseError] = useState('');
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({ name: '' });
  const { categories, isLoadingCategories } = useCategories();
  const [searchTerm, setSearchTerm] = useState<string>('');

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

  const handleSucessCreate = () => {
    setName('');
    queryClient.invalidateQueries('categories');
    handleClose();
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      props.close();
    }, 300);
  };

  const categoryMutation = useMutation(CreateCategory, {
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

  const categoryEditMutation = useMutation(EditCategory, {
    onSettled: (data: any) => {
      if (data) {
        toast.success('Classe atualizada!');
        setNomeCat('');
        queryClient.invalidateQueries('categories');
        handleClose();
      } else {
        toast.error(data && data.message ? data.message : 'Algum erro ocorreu!');
      }
    },
  });

  const validateFormCreate = async (): Promise<boolean> => {
    try {
      await validationCreateCatSchema.validate(
        {
          name,
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
          name: nomeCat,
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
        name,
      });
    }
  };

  const onSubmitEditar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await validateFormEdit();
    if (isValid) {
      categoryEditMutation.mutate({
        id: props.id,
        name: nomeCat,
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

  console.warn('teste');

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent>
            {props.title === 'Criar classe' && (
              <S.ModalContent>
                <S.NameClose>
                  <h2>{props.title}</h2>
                  <S.Exit type="button" onClick={handleClose}>
                    <img src="/close.svg" alt="" height={18} width={18} />
                  </S.Exit>
                </S.NameClose>

                <S.FormCriar onSubmit={onSubmitCreate}>
                  <S.InputText
                    placeholder="Nome da classe..."
                    onChange={(e) => setName(e.currentTarget.value)}
                    value={name}
                    name="name"
                    className="name"
                  />
                  {Categorias?.includes(name) && (
                    <p style={{ color: theme.colors['red/400'] }}>Já existe uma classe com este nome.</p>
                  )}

                  {name.length < 3 && (
                    <p style={{ color: theme.colors['red/400'] }}>
                      O nome da classe precisa ter ao menos 3 caracteres.
                    </p>
                  )}
                  {validationFormError.name && <ErrorMessage>{validationFormError.name}</ErrorMessage>}
                  {categoryMutation.isLoading ? (
                    <S.Criar type="submit" disabled>
                      <ReactLoading type="cylon" color="white" height={30} width={30} />
                    </S.Criar>
                  ) : Categorias?.includes(name) || name.length < 3 ? (
                    <S.CriarDesativado type="submit" disabled>
                      Criar categoria
                    </S.CriarDesativado>
                  ) : (
                    <S.Criar type="submit">Criar categoria</S.Criar>
                  )}
                  {responseError && <ErrorMessage>{responseError}</ErrorMessage>}
                </S.FormCriar>
              </S.ModalContent>
            )}

            {/* Editar Categoria */}
            {props.title === 'Editar classe' && (
              <S.ModalContent>
                <S.NameClose>
                  <h2>{props.title}</h2>
                  <S.Exit type="button" onClick={handleClose}>
                    <img src="/close.svg" alt="" height={18} width={18} />
                  </S.Exit>
                </S.NameClose>
                <S.FormCriar onSubmit={onSubmitEditar}>
                  <S.InputText
                    placeholder="Nome da classe..."
                    onChange={(e) => setNomeCat(e.currentTarget.value)}
                    value={nomeCat}
                  />
                  {Categorias?.includes(nomeCat) && (
                    <p style={{ color: theme.colors['red/400'] }}>Já existe uma classe com este nome.</p>
                  )}

                  {nomeCat.length < 3 && (
                    <p style={{ color: theme.colors['red/400'] }}>
                      O nome da classe precisa ter ao menos 3 caracteres.
                    </p>
                  )}

                  {validationFormError.name && <ErrorMessage>{validationFormError.name}</ErrorMessage>}
                  {categoryEditMutation.isLoading ? (
                    <S.Criar type="submit" disabled>
                      <ReactLoading type="cylon" color="white" height={30} width={30} />
                    </S.Criar>
                  ) : Categorias?.includes(nomeCat) || nomeCat.length < 3 ? (
                    <S.CriarDesativado type="submit" disabled>
                      Editar categoria
                    </S.CriarDesativado>
                  ) : (
                    <S.Criar type="submit">Editar categoria</S.Criar>
                  )}
                  {responseError && <ErrorMessage>{responseError}</ErrorMessage>}
                </S.FormCriar>
              </S.ModalContent>
            )}
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};
