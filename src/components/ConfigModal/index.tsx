import React, { useEffect, useState } from 'react';
import * as S from './style';

interface ConfigModalProps {
  close: () => void;
  handlePrioridade: () => void;
  valor_prioridade: boolean;
  valor_compart: boolean;
  handleCompart: () => void;
}

export const ConfigModal = (props: ConfigModalProps) => {
  const [Pchecked, setPChecked] = useState(props.valor_prioridade);
  const handlePrioridadeCheck = () => {
    setPChecked(!Pchecked);
    props.handlePrioridade();
  };

  const [compartChecked, setCompartChecked] = useState(props.valor_compart);
  const handlePCompartilhamentoCheck = () => {
    setCompartChecked(!compartChecked);
    props.handleCompart();
  };
  console.log(props.valor_compart);

  const [closing, setClosing] = useState(false);
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
          <S.ModalContent id="modal-content">
            <S.NameClose>
              <h2>Configurações do lote</h2>
              <button onClick={handleClose} style={{ border: 'none', backgroundColor: 'transparent' }}>
                <div
                  style={{
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 5,
                    paddingBottom: 5,
                    background: '#191C24',
                    borderRadius: 3,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 10,
                    display: 'inline-flex',
                  }}
                >
                  <div
                    style={{
                      color: 'white',
                      fontSize: 12,
                      fontFamily: 'Rubik',
                      fontWeight: '700',
                      wordWrap: 'break-word',
                    }}
                  >
                    X
                  </div>
                </div>
              </button>
            </S.NameClose>

            <S.Compartilhamento>
              <p>Compartilhamento</p>
              <S.SwitchButton>
                <S.Input checked={compartChecked} onChange={handlePCompartilhamentoCheck} />
                <S.Slider />
              </S.SwitchButton>
            </S.Compartilhamento>

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
