import { LoteData } from '../../data/LoteData';
import { useEffect, useState } from 'react';
import * as S from './styles';
import { useParams } from 'react-router-dom';
import { Check } from '@phosphor-icons/react';
import theme from '../../global/theme';

interface VoltarModalProps {
  close: () => void;
}

export const VoltarModal = (props: VoltarModalProps) => {
  const { id } = useParams();
  const [lote] = useState(LoteData);
  const task = lote.filter((task: (typeof LoteData)[0]) => task.id == id)[0];

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

  const [isChecked, setIsChecked] = useState(false); // Estado para controlar o valor do input

  // ...

  const handleInputChange = () => {
    setIsChecked(!isChecked); // Inverte o valor do isChecked quando o input é clicado
  };

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent>
            <S.NameClose>
              <S.Titulo> Deseja voltar para? </S.Titulo>
            </S.NameClose>

            {/* PENDÊNCIAS */}
            {task.pendencias.map((pend) => (
              <>
                <h3>Motivo:</h3>
                <S.PendDivBlack key={pend.id}>
                  <S.PendenciaTextIcon>
                    {<S.AlertIcon src={'/warning.svg'} alt="ícone de alerta" />}
                    {pend.comment}
                  </S.PendenciaTextIcon>

                  <S.LabelCheck htmlFor="check">
                    <S.CheckContainer>
                      <span>
                        <S.InputCheck
                          name="check"
                          checked={isChecked}
                          onChange={handleInputChange}
                          id="check"
                          type="checkbox"
                        />
                        <Check style={{ position: 'absolute', top: '20%', left: '20%' }} />
                      </span>
                    </S.CheckContainer>
                  </S.LabelCheck>
                </S.PendDivBlack>
              </>
            ))}
            <S.RecusedVoltar>
              <S.Recused onClick={handleClose}>
                <S.Texto>Não, não quero.</S.Texto>
              </S.Recused>
              <S.Voltar
                onClick={handleClose}
                disabled={!isChecked}
                style={{ background: !isChecked ? '#666666' : '', cursor: !isChecked ? '' : 'pointer' }}
              >
                {!isChecked && <S.IconeVoltar src="/voltar-desativado.svg"></S.IconeVoltar>}
                {isChecked && <S.IconeVoltar src="/voltar.svg"></S.IconeVoltar>}
                <S.Texto style={{ color: !isChecked ? '#ffffff7f' : theme.colors.white }}>Voltar fase</S.Texto>
              </S.Voltar>
            </S.RecusedVoltar>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
