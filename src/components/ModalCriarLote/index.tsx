import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { ErrorMessage } from '../../pages/Login/styles';
import { validationLoginSchema } from './validation';
import { useMutation } from 'react-query';
import { CreateBatche } from '../../api/services/batches/create-batche';
import * as Yup from 'yup';
import { ErrorsForm } from './criar.interface';
import ReactLoading from 'react-loading';
import toast from 'react-hot-toast';

interface ModalCriarProps {
  close: () => void;
  refetch: () => void;
}

export const ModalCriarLote = (props: ModalCriarProps) => {
  const [closing, setClosing] = useState(false);
  const [title, setTitle] = useState('');
  const [responseError] = useState('');
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({
    title: '',
    settlement_project_category_id: '',
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
    setTitle('');
    handleClose();
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      props.refetch();
      props.close();
    }, 300);
  };

  const batcheMutation = useMutation(CreateBatche, {
    onSuccess: () => {
      toast.success('Lote Criado!');
    },
    onSettled: (data: any) => {
      if (data) {
        handleClose();
      } else {
        toast.error(data && data.massege ? data.message : 'Algum erro ocorreu!');
      }
    },
  });

  const validateForm = async (): Promise<boolean> => {
    try {
      await validationLoginSchema.validate(
        {
          title,
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
      batcheMutation.mutate({
        title,
      });
    }
  };

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent>
            <S.NameClose>
              <h2>Criar Lote</h2>
              <S.Exit type="button" onClick={handleClose}>
                <img src="/buttonclose.svg" alt="" height={18} width={18} />
              </S.Exit>
            </S.NameClose>

            <S.FormCriar onSubmit={onSubmit}>
              <S.InputText
                placeholder="Nome do Lote"
                onChange={(e) => setTitle(e.currentTarget.value)}
                value={title}
                name="title"
                className="title"
              />
              {validationFormError.title && <ErrorMessage>{validationFormError.title}</ErrorMessage>}
              {batcheMutation.isLoading ? (
                <S.Criar type="submit" disabled>
                  <ReactLoading type="cylon" color="white" height={30} width={30} />
                </S.Criar>
              ) : (
                <S.Criar type="submit">Criar Lote</S.Criar>
              )}
              {responseError && <ErrorMessage>{responseError}</ErrorMessage>}
            </S.FormCriar>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};
