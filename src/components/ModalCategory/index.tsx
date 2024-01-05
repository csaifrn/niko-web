import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { ErrorMessage } from '../../pages/Login/styles';
import { validationCreateCatSchema } from './validation';
import { useMutation, useQueryClient } from 'react-query';
import * as Yup from 'yup';
import { ErrorsForm } from './criar.interface';
import ReactLoading from 'react-loading';
import toast from 'react-hot-toast';
import { CreateCategory } from '../../api/services/categoria/create-category';
import { EditCategory } from '../../api/services/categoria/edit-category';
import theme from '../../global/theme';

interface ModalCategoriaProps {
  id?: string;
  nomeCat?: string;
  title: string;
  close: () => void;
  refetch: () => void;
}

export const ModalCategory = (props: ModalCategoriaProps) => {
  const queryClient = useQueryClient();
  const [closing, setClosing] = useState(false);
  const [name, setName] = useState<string>('');
  const [nomeCat, setNomeCat] = useState<string>(props.nomeCat ? props.nomeCat : '');
  const [responseError] = useState('');
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({ name: '' });

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
    if (props.refetch) {
      props.refetch();
    }
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
        toast.success('Categoria criada!');
        handleSucessCreate();
      } else {
        toast.error(data && data.message ? data.message : 'Algum erro ocorreu!');
      }
    },
  });

  const categoryEditMutation = useMutation(EditCategory, {
    onSettled: (data: any) => {
      if (data) {
        toast.success('Categoria atualizada!');
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
                    placeholder="Nome da categoria..."
                    onChange={(e) => setName(e.currentTarget.value)}
                    value={name}
                    name="name"
                    className="name"
                  />
                  {validationFormError.name && <ErrorMessage>{validationFormError.name}</ErrorMessage>}
                  {categoryMutation.isLoading ? (
                    <S.Criar type="submit" disabled>
                      <ReactLoading type="cylon" color="white" height={30} width={30} />
                    </S.Criar>
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
                    placeholder="Nome da categoria..."
                    onChange={(e) => setNomeCat(e.currentTarget.value)}
                    value={nomeCat}
                  />
                  {props.nomeCat === nomeCat && <p style={{color: theme.colors['red/400']}}>Por favor escolha um nome diferente do atual</p>}

                  {nomeCat.length < 3 && <p style={{color: theme.colors['red/400']}}>O nome precisa ter ao menos 3 caracteres</p>}

                  {validationFormError.name && <ErrorMessage>{validationFormError.name}</ErrorMessage>}
                  {categoryEditMutation.isLoading ? (
                    <S.Criar type="submit" disabled>
                      <ReactLoading type="cylon" color="white" height={30} width={30} />
                    </S.Criar>
                  ) : props.nomeCat === nomeCat ||  nomeCat.length < 3 ? (
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
