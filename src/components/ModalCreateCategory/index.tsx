import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { ErrorMessage } from '../../pages/Login/styles';
import { validationLoginSchema } from './validation';
import { useMutation } from 'react-query';
import * as Yup from 'yup';
import { ErrorsForm } from './criar.interface';
import ReactLoading from 'react-loading';
import toast from 'react-hot-toast';
import { CreateCategory } from '../../api/services/categoria/create-category';

interface ModalCriarProps {
  close: () => void;
  refetch?: () => void;
}

interface Options {
  value: string;
  label: string;
}

export const ModalCreteCategory = (props: ModalCriarProps) => {
  const [closing, setClosing] = useState(false);
  const [name, setName] = useState('');
  const [responseError] = useState('');
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({
    name: '',
  });

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

  const handleSucess = () => {
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
        handleSucess();
      } else {
        toast.error(data && data.massege ? data.message : 'Algum erro ocorreu!');
      }
    },
  });

  const validateForm = async (): Promise<boolean> => {
    try {
      await validationLoginSchema.validate(
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

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await validateForm();
    if (isValid) {
      categoryMutation.mutate({
        name,
      });
    }
  };

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent>
            <S.NameClose>
              <h2>Criar Categoria</h2>
              <S.Exit type="button" onClick={handleClose}>
                <img src="/close.svg" alt="" height={18} width={18} />
              </S.Exit>
            </S.NameClose>

            <S.FormCriar onSubmit={onSubmit}>
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
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};
