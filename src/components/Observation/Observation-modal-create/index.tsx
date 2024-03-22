import { useState, useEffect, useLayoutEffect, ChangeEvent, useRef } from 'react';
import * as S from './styles';
import { ErrorsForm } from './successmodal.interface';
import { validationObservation } from './validation';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { useMutation } from 'react-query';
import { CreateObservation } from '../../../api/services/batches/observation/post-observation';
import { CreateObservationResponse } from '../../../api/services/batches/observation/post-observation/post.interface';
import toast from 'react-hot-toast';
import { ApiError } from '../../../api/services/authentication/signIn/signIn.interface';
import { Observation } from '../../../api/services/batches/get-batche/get.interface';
import { ErrorMessage } from '../../../pages/Login/styles';
import { InputObservation } from '../Observation-modal-update/styles';
import { SharedState } from '../../../context/SharedContext';
import { PatchPendencia } from '../../../api/services/batches/observation/pendencia';

const MIN_TEXTAREA_HEIGHT = 32;
interface DeletarModalProps {
  title: string;
  id: string | undefined;
  pendencia: boolean | undefined;
  close: () => void;
  // eslint-disable-next-line no-unused-vars
  refetch: () => void;
  observations: Observation[];
}

export const CreateObservationModal = (props: DeletarModalProps) => {
  const { user } = SharedState();
  const [closing, setClosing] = useState(false);
  const [observation, setObservation] = useState('');
  const { id } = useParams();
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({ observation: '' });
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState<string>('');
  const [isPending, setIsPending] = useState<boolean>(false);

  // const Pendencia = useMutation(PatchPendencia, {
  //   onSuccess: () => {
  //     toast.success(`Pendência ${isPending ? 'foi desativada' : 'foi ativada'}!`);
  //   },
  //   onError: (error: ApiError) => {
  //     toast.error(error.response!.data.message);
  //   },
  // });

  const handlePend = () => {
    setIsPending(!isPending);
    // if (isPending && props.id) {
    //   setIsPending(false);
    //   //props.priorityOnChange(false);
    //   Pendencia.mutate({
    //     id: props.id,
    //   });
    // } else if (props.id) {
    //   setIsPending(true);
    //   //props.priorityOnChange(true);
    //   Pendencia.mutate({
    //     id: props.id,
    //   });
    // }
  };

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
      let date = new Date();
      date.setHours(date.getHours() + 3);
      toast.success(`Observação adicionada: ${data.observation}`);
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
          observation: observation.trim(),
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
        observation: observation.trim(),
        is_pending: isPending,
      });
    }
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      props.close();
      props.refetch();
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
                <img src="/buttonclose.svg" alt="" height={24} width={24} />
              </S.Exit>
            </S.NameClose>

            <InputObservation
              autoFocus
              ref={textareaRef}
              style={{
                minHeight: MIN_TEXTAREA_HEIGHT,
                resize: 'none',
              }}
              value={observation}
              onChange={(e) => {
                setObservation(e.currentTarget.value);
                onChange(e);
              }}
              onFocus={function (e) {
                var val = e.target.value;
                e.target.value = '';
                e.target.value = val;
              }}
              placeholder="Escreva uma observação..."
            />

            <h3>Pendência?</h3>

            <S.SwitchButton>
              <S.Input checked={isPending} onChange={handlePend} />
              <S.Slider />
            </S.SwitchButton>

            {validationFormError.observation && <ErrorMessage>{validationFormError.observation}</ErrorMessage>}

            <S.Green onClick={handleSave} disabled={ObservationMutate.isLoading || ObservationMutate.isSuccess}>
              Salvar
            </S.Green>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
