import { useState, useEffect } from 'react';
import * as S from './styles';
import { ButtonGray, ButtonGreen } from '../../../pages/Projeto/projeto-create/styles';
import { ApiError } from '../../../api/services/authentication/signIn/signIn.interface';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { DeleteObservation } from '../../../api/services/batches/observation/delete-obsevation';
import { UpdateObservation } from '../../../api/services/batches/observation/update-obsevation';
import { validationObservationSchema } from '../validation.observation';
import { ErrorsForm } from '../interface.observation';
import * as Yup from 'yup';
import { ErrorMessage } from '../../../pages/Login/styles';
import { PropsObservation } from '..';
import { Observation } from '../../../api/services/batches/get-batche/get.interface';

interface DeletarModalProps {
  refetch: (e: Observation[] | undefined) => void;
  title: string;
  id: string | undefined;
  close: () => void;
  observation: string | undefined;
  observations: Observation[] | undefined;
}

export const ObservationModal = (props: DeletarModalProps) => {
  const [closing, setClosing] = useState(false);
  const [obs, setObs] = useState<string>(props.observation ? props.observation : '');
  const [responseError, setResponseError] = useState('');

  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({ observation: '' });

  const updateMutate = useMutation(UpdateObservation, {
    onSuccess: (data) => {
      toast.success('Observação atualizada!');
      console.log(obs, props.id);
      console.log(
        props.observations
          ? props.observations.filter((e) => {
              if (e.id === props.id) {
                console.log(props.id);
                return { id: e.id, observation: obs, created_at: e.created_at, created_by: e.created_by };
              } else {
                return e;
              }
            })
          : undefined,
      );
      props.refetch(
        props.observations
          ? props.observations.filter((e) => {
              if (e.id === props.id) {
                return { id: e.id, observation: obs, created_at: e.created_at, created_by: e.created_by };
              } else {
                return e;
              }
            })
          : undefined,
      );
    },
    onError: (error: ApiError) => {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    },
  });

  const updateObservation = async () => {
    const isValid = await validateForm();
    if (isValid && props.id) {
      updateMutate.mutate({
        id: props.id,
        observation: obs,
      });
    }
  };

  const validateForm = async (): Promise<boolean> => {
    try {
      await validationObservationSchema.validate(
        {
          observation: obs,
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
  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent>
            <S.NameClose>
              <h2>{props.title}</h2>
              <S.Exit type="button" onClick={handleClose}>
                <img src="/close.svg" alt="" height={18} width={18} />
              </S.Exit>
            </S.NameClose>
            <S.InputObservation value={obs} onChange={(e) => setObs(e.currentTarget.value)} />
            {validationFormError.observation && <ErrorMessage>{validationFormError.observation}</ErrorMessage>}
            <S.ButtonBlack onClick={props.close}>Não, não quero.</S.ButtonBlack>
            <ButtonGreen onClick={updateObservation} type="button">
              Salvar
            </ButtonGreen>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
