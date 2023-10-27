import { useState, useEffect, ChangeEvent, useLayoutEffect, useRef } from 'react';
import * as S from './styles';
import { ButtonGreen } from '../../../pages/Projeto/projeto-create/styles';
import { ApiError } from '../../../api/services/authentication/signIn/signIn.interface';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { DeleteObservation } from '../../../api/services/batches/observation/delete-obsevation';
import { UpdateObservation } from '../../../api/services/batches/observation/update-obsevation';
import * as Yup from 'yup';
import { ErrorMessage } from '../../../pages/Login/styles';
import { Observation } from '../../../api/services/batches/get-batche/get.interface';
import { ErrorsForm } from '../ObservationBox/interface.observation';
import { validationObservationSchema } from '../ObservationBox/validation.observation';

const MIN_TEXTAREA_HEIGHT = 32;

interface DeletarModalProps {
  refetch: (e: Observation[]) => void;
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

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState<string>('');

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  useLayoutEffect(() => {
    if (textareaRef.current) {
      // Reset height - important to shrink on delete
      textareaRef.current.style.height = 'inherit';
      // Set height
      textareaRef.current.style.height = `${Math.max(textareaRef.current.scrollHeight, MIN_TEXTAREA_HEIGHT)}px`;
    }
  }, [value]);

  const updateMutate = useMutation(UpdateObservation, {
    onSuccess: (data) => {
      toast.success('Observação atualizada!');
      const updatedObservations = props.observations?.map((observation) => {
        if (observation.id === props.id) {
          return {
            id: observation.id,
            observation: obs, // Usando o valor atualizado
            created_at: observation.created_at,
            created_by: observation.created_by,
          };
        }
        return observation;
      });
      props.refetch(updatedObservations ? updatedObservations : []);
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
            <S.InputObservation
              autoFocus
              ref={textareaRef}
              style={{
                minHeight: MIN_TEXTAREA_HEIGHT,
                resize: 'none',
              }}
              value={obs}
              onChange={(e) => {
                setObs(e.currentTarget.value);
                onChange(e);
              }}
              onFocus={function (e) {
                var val = e.target.value;
                e.target.value = '';
                e.target.value = val;
              }}
              placeholder="Edite sua observação..."
            />
            {validationFormError.observation && <ErrorMessage>{validationFormError.observation}</ErrorMessage>}
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
