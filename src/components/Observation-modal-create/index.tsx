import { useState, useEffect } from 'react';
import * as S from './styles';
import { InputText } from '../ModalCrairLote/styles';
import { ErrorsForm } from './successmodal.interface';
import { validationObservation } from './validation';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { useMutation } from 'react-query';
import { CreateObservation } from '../../api/services/batches/observation/post-observation';
import { CreateObservationResponse } from '../../api/services/batches/observation/post-observation/post.interface';
import toast from 'react-hot-toast';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';

import { Observation } from '../../api/services/batches/get-batche/get.interface';
import { ErrorMessage } from '../../pages/Login/styles';

interface DeletarModalProps {
  title: string;
  close: () => void;
  // eslint-disable-next-line no-unused-vars
  refetch: (Obs: Observation[]) => void;
  observations: Observation[];
}

export const CreateObservationModal = (props: DeletarModalProps) => {
  const [closing, setClosing] = useState(false);
  const [observation, setObservation] = useState('');
  const { id } = useParams();
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({ observation: '' });
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

  const ObservationMutate = useMutation(CreateObservation, {
    onSuccess(data: CreateObservationResponse) {
      toast.success(`Observação adicionada: ${data.observation}`);
      props.refetch([
        ...props.observations,
        {
          id: data.id,
          observation: data.observation,
          created_at: String(new Date()),
          created_by: { name: 'Random', user_id: '1' },
        },
      ]);
      handleClose();
    },
    onError(error: ApiError) {
      toast.error(error.message);
    },
  });

  const validateForm = async (): Promise<boolean> => {
    try {
      await validationObservation.validate(
        {
          observation,
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

  const handleSave = async () => {
    const isValid = await validateForm();
    if (isValid) {
      ObservationMutate.mutate({
        id: id!,
        observation,
      });
    }
  };

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
            <InputText
              placeholder="digite aqui a observação!"
              value={observation}
              onChange={(e) => setObservation(e.currentTarget.value)}
            />
            {validationFormError.observation && <ErrorMessage>{validationFormError.observation}</ErrorMessage>}

            <S.Green onClick={handleSave}>Salvar</S.Green>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
