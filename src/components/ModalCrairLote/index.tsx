import { useState, useEffect, useRef } from 'react';
import * as S from './styles';
import { ErrorMessage, InputText } from '../../pages/Login/styles';
import { validationLoginSchema } from './validation';
import { useMutation } from 'react-query';
import { CreateBatche } from '../../api/services/batches/create-batche';
import { CreateResponseBatche } from '../../api/services/batches/create-batche/create.interface';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import * as Yup from 'yup';
import { ErrorsForm } from './criar.interface';
import ReactLoading from 'react-loading';
import toast from 'react-hot-toast';

interface ModalCriarProps {
  close: () => void;
}

export const ModalCriarLote = (props: ModalCriarProps) => {
  const [closing, setClosing] = useState(false);
  const [settlement_project, setSettlement_project] = useState('');
  const [responseError] = useState('');
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({ settlement_project: '' });

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
    setSettlement_project('');
    handleClose();
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      props.close();
    }, 300);
  };

  const loginMutation = useMutation(CreateBatche, {
    onSuccess: (data: CreateResponseBatche) => {
      toast.success('Lote Criado!');
      handleSucess();
    },
    onError: (error: ApiError) => {
      toast.error(error.response!.data.message);
    },
  });

  const validateForm = async (): Promise<boolean> => {
    try {
      await validationLoginSchema.validate(
        {
          settlement_project,
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
      loginMutation.mutate({
        settlement_project,
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
                <img src="/close.svg" alt="" height={18} width={18} />
              </S.Exit>
            </S.NameClose>
            <S.FormCriar onSubmit={onSubmit}>
              <S.InputText
                placeholder="Nome do Lote"
                onChange={(e) => setSettlement_project(e.currentTarget.value)}
                value={settlement_project}
                name="settlement_project"
                className="settlement_project"
              />
              {validationFormError.settlement_project && (
                <ErrorMessage>{validationFormError.settlement_project}</ErrorMessage>
              )}
              {loginMutation.isLoading ? (
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
