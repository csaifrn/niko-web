import { useEffect, useState } from 'react';
import * as S from './style';
import { useMutation } from 'react-query';
import { PatchBatchePriority } from '../../api/services/batches/patch-batche';
import toast from 'react-hot-toast';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';

interface ConfigModalProps {
  id: string;
  prioridade: boolean;
  close: () => void;
  priorityOnChange: (e: boolean) => void;
}

export const ConfigModal = (props: ConfigModalProps) => {
  const [Pchecked, setPChecked] = useState(props.prioridade);

  const Priority = useMutation(PatchBatchePriority, {
    onSuccess: (data) => {
      toast.success(`Prioride ${data.priority ? 'foi ativada' : 'foi desativada'}!`);
    },
    onError: (error: ApiError) => {
      toast.error(error.response!.data.message);
    },
  });

  const handlePrioridadeCheck = () => {
    if (Pchecked) {
      setPChecked(false);
      props.priorityOnChange(false);
      Priority.mutate({
        id: props.id,
        priority: false,
      });
    } else {
      setPChecked(true);
      props.priorityOnChange(true);
      Priority.mutate({
        id: props.id,
        priority: true,
      });
    }
  };

  // const [compartChecked, setCompartChecked] = useState(props.valor_compart);
  // const handlePCompartilhamentoCheck = () => {
  //   setCompartChecked(!compartChecked);
  //   props.handleCompart();
  // };

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
          <S.ModalContent id="modal-content">
            <S.NameClose>
              <h2>Configurações do lote</h2>
              <button onClick={handleClose} style={{ border: 'none', backgroundColor: 'transparent' }}>
                <button
                  style={{
                    padding: '4px',
                    background: '#191C24',
                    border: 'none',
                    borderRadius: 3,

                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                    }}
                  >
                    <img src="/close.svg" alt="" height={18} width={18} />
                  </div>
                </button>
              </button>
            </S.NameClose>

            {/* <S.Compartilhamento>
              <p>Compartilhamento</p>
              <S.SwitchButton>
                <S.Input checked={compartChecked} onChange={handlePCompartilhamentoCheck} />
                <S.Slider />
              </S.SwitchButton>
            </S.Compartilhamento> */}

            <S.Prioridade>
              <p>Prioridade</p>
              <S.SwitchButton>
                <S.Input checked={Pchecked} onChange={handlePrioridadeCheck} />
                <S.Slider />
              </S.SwitchButton>
            </S.Prioridade>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
