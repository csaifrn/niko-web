import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useLayoutEffect, useRef, useState } from 'react';
import * as S from './styles';
import theme from '../../global/theme';
import { InputObservation } from '../Observation/Observation-modal-update/styles';
import { ArquivosInput } from '../EspecificStatusModal/styles';
import { ErrorsForm, validateCreateShipment } from './validation';
import { ErrorMessage } from '../../pages/Login/styles';
import { AtribuirButton } from '../AtribuirAlguemModal/style';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters, useMutation } from 'react-query';
import { CreateShipment } from '../../api/services/shipments/post-shipment';
import toast from 'react-hot-toast';
import { Exit } from '../ConfigModal/style';
import { Shipment } from '../../api/services/shipments/inteface';
import { EditShipment } from '../../api/services/shipments/patch-shipment';

interface user {
  id: string;
  name: string;
  url: string;
  email: string;
  lote: string;
  fase: string;
  andamento: boolean;
}

interface EditModalProps {
  close: () => void;
  shipment: Shipment | null;
  setShipment: Dispatch<SetStateAction<Shipment | null>>;
  refech: (
    options?: (RefetchOptions & RefetchQueryFilters<unknown>) | undefined,
  ) => Promise<QueryObserverResult<Shipment[], unknown>>;
}
const MIN_TEXTAREA_HEIGHT = 32;

export const ShipmentModal = (props: EditModalProps) => {
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({
    count_boxes: '',
    description: '',
    received_at: '',
    title: '',
  });
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [title, setTitle] = useState('');
  const [received_at, setReceivedAt] = useState<string>('');
  const [description, setDescription] = useState('');
  const [count_boxes, setCountBoxes] = useState<number>(0);

  useEffect(() => {
    if (props.shipment) {
      setTitle(props.shipment.title);
      setReceivedAt(formatDateInput(props.shipment.received_at));
      setDescription(props.shipment.description ? props.shipment.description : '');
      setCountBoxes(props.shipment.count_boxes);
    }
  }, []);

  const mutateShipmentCreate = useMutation(CreateShipment, {
    onSuccess: (data) => {
      toast.success(`Remessa "${data.title}" criada!`);
      props.refech();

      handleClose();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const mutateShipmentEdit = useMutation(EditShipment, {
    onSuccess: (data) => {
      toast.success(`Remessa "${data.title}" editada!`);
      props.refech();
      handleClose();
    },
    onError: (error) => {
      toast.error('Aconteceu alguma coisa errada!');
    },
  });

  const handleCountBoxes = (e: ChangeEvent<HTMLInputElement>) => {
    setCountBoxes(Number(e.target.value));
  };
  const handleReceivedAt = (e: ChangeEvent<HTMLInputElement>) => {
    setReceivedAt(e.target.value);
  };
  const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  function formatDateInput(date: string): string {
    const dateNew = new Date(date);

    const day = String(dateNew.getDate()).padStart(2, '0');
    const month = String(dateNew.getMonth() + 1).padStart(2, '0');
    const year = dateNew.getFullYear();
    return `${year}-${month}-${day}`;
  }

  function formatDate(date: string): string {
    const dateNew = new Date(date);
    if (dateNew > new Date()) {
      setValidationFormError((valores) => ({
        ...valores,
        received_at: 'Data inválida! escolha uma data que ja ocorreu!',
      }));
      return 'data invalida';
    } else {
      const day = String(dateNew.getDate()).padStart(2, '0');
      const month = String(dateNew.getMonth() + 1).padStart(2, '0');
      const year = dateNew.getFullYear();
      return `${day}/${month}/${year}`;
    }
  }

  useLayoutEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'inherit';
      textareaRef.current.style.height = `${Math.max(textareaRef.current.scrollHeight, MIN_TEXTAREA_HEIGHT)}px`;
    }
  }, [description]);

  const handleShipment = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const isValid = await validateCreateShipment({
      description: description.trim(),
      count_boxes,
      received_at: formatDate(received_at),
      setValidationFormError,
      title,
    });

    if (isValid) {
      if (props.shipment) {
        mutateShipmentEdit.mutate({
          id: props.shipment.id,
          title,
          count_boxes: count_boxes,
          received_at,
          description: description ? description.trim() : null,
        });
      } else {
        mutateShipmentCreate.mutate({
          title,
          count_boxes: count_boxes,
          received_at,
          description: description ? description.trim() : null,
        });
      }
    }
  };

  const [closing, setClosing] = useState(false);
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
          <form action="">
            <S.ModalContent id="modal-content">
              <S.NameClose>
                <h2>Criar remessa</h2>
                <Exit type="button" onClick={handleClose}>
                  <img src="/close.svg" alt="" height={24} width={24} />
                </Exit>
              </S.NameClose>

              <S.TituloDiv>
                <p>Titulo</p>
                <S.Local
                  style={{ backgroundColor: theme.colors['gray/700'] }}
                  placeholder="Titulo"
                  onChange={(e) => setTitle(e.currentTarget.value)}
                  value={title}
                />
                {validationFormError.title && <ErrorMessage>{validationFormError.title}</ErrorMessage>}
              </S.TituloDiv>

              {/* Qtd Caixas */}
              <S.TituloDiv>
                <p>Quantidade de Caixas</p>
                <ArquivosInput
                  onChange={handleCountBoxes}
                  value={count_boxes}
                  style={{ backgroundColor: theme.colors['gray/700'] }}
                  type="number"
                  name="qtd_caixas"
                  placeholder={'23'}
                  required
                ></ArquivosInput>
                {validationFormError.count_boxes && <ErrorMessage>{validationFormError.count_boxes}</ErrorMessage>}
              </S.TituloDiv>

              {/* received_at */}
              <S.LocalDiv>
                <p>Data</p>
                <S.Local
                  onChange={handleReceivedAt}
                  value={received_at}
                  style={{ backgroundColor: theme.colors['gray/700'], colorScheme: 'dark' }}
                  type="date"
                  name="date"
                  required
                ></S.Local>
                {validationFormError.received_at && <ErrorMessage>{validationFormError.received_at}</ErrorMessage>}
              </S.LocalDiv>

              <S.LocalDiv>
                <p>
                  Observação <span style={{ color: theme.colors['gray/100'] }}>*opcional</span>
                </p>
                <InputObservation
                  ref={textareaRef}
                  style={{
                    minHeight: MIN_TEXTAREA_HEIGHT,
                    resize: 'none',
                  }}
                  value={description}
                  onChange={(e) => {
                    handleDescription(e);
                  }}
                  onFocus={function (e) {
                    var val = e.target.value;
                    e.target.value = '';
                    e.target.value = val;
                  }}
                  placeholder="Escreva uma observação..."
                />
                {validationFormError.description && <ErrorMessage>{validationFormError.description}</ErrorMessage>}
              </S.LocalDiv>

              <AtribuirButton
                type="submit"
                onClick={(e) => {
                  handleShipment(e);
                }}
              >
                Salvar
              </AtribuirButton>
            </S.ModalContent>
          </form>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
