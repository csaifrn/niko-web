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
import { CheckCircle } from '@phosphor-icons/react';
import theme from '../../global/theme';
import toast, { Toaster } from 'react-hot-toast';

interface ModalCriarProps {
  close: () => void;
}

export const ModalCriarLote = (props: ModalCriarProps) => {
  const [closing, setClosing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [criar, setCriar] = useState(false);
  const [settlement_project, setSettlement_project] = useState('');
  const [responseError, setResponseError] = useState('');
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

  const handleOk = () => {
    setSettlement_project('');
    setLoading(false);

    setTimeout(() => {
      handleClose();
    }, 300);
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      props.close();
    }, 300);
  };

  const loginMutation = useMutation(CreateBatche, {
    onSuccess: (data: CreateResponseBatche) => {
      toast.success('Lote Criado!', {
        style: {
          borderRadius: '5px',
          background: theme.colors['gray/500'],
          color: '#fff',
          fontFamily: 'Rubik',
        },
      });
      handleOk();
      // TODO: store user on context state
    },
    onError: (error: ApiError) => {
      setLoading(false);
      setResponseError(error.response?.data.message || 'Um erro inesperado ocorreu.');
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
    setLoading(true);
    e.preventDefault();
    const isValid = await validateForm();

    if (isValid) {
      loginMutation.mutate({
        settlement_project,
      });
    } else {
      setLoading(false);
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

              {criar! ? (
                <S.Criar type="submit" disabled>
                  <CheckCircle weight="fill" color={theme.colors['gray/700']} height={28} width={28} />
                </S.Criar>
              ) : (
                <S.Criar type="submit">
                  {loading ? <ReactLoading type="cylon" color="white" height={30} width={30} /> : 'Criar Lote'}
                </S.Criar>
              )}
              {responseError && <ErrorMessage>{responseError}</ErrorMessage>}
            </S.FormCriar>
          </S.ModalContent>
        </S.ModalArea>
        <Toaster position="bottom-right" reverseOrder={false} />
      </S.ModalBackdrop>
    </>
  );
};
