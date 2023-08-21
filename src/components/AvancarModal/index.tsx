import { LoteData } from '../../data/LoteData';
import { useState } from 'react';
import * as S from './styles';
import { useParams } from 'react-router-dom';

interface AvancarModalProps {
  close: () => void;
}

export const AvancarModal = (props: AvancarModalProps) => {
  const { id } = useParams();
  const [lote] = useState(LoteData);
  const task = lote.filter((task: (typeof LoteData)[0]) => task.id == id)[0];
  const [pendCheck, setPendCheck] = useState(false);

  const handlePendCheck = () => {
    setPendCheck(!pendCheck);
    console.log('Vc clicou em uma pendência');
  };

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea>
          <S.ModalContent>
            <S.NameClose>
              <S.Titulo> Deseja avançar para? </S.Titulo>
            </S.NameClose>

            {/* PENDÊNCIAS */}
            {task.pendencias.map((pend) => (
              <S.PendDivBlack key={pend.id}>
                <S.PendenciaTextIcon>
                  {<S.AlertIcon src={'/warning,svg'} alt="ícone de alerta" />}
                  {pend.comment}
                </S.PendenciaTextIcon>

                <S.LabelPendencia className="checkbox-container">
                  <S.SelectPendencia type="checkbox" onClick={handlePendCheck}></S.SelectPendencia>
                  <S.SpanPendencia className="checkmark"></S.SpanPendencia>
                </S.LabelPendencia>
              </S.PendDivBlack>
            ))}
            <S.RecusedAvancar>
              <S.Recused onClick={props.close}>
                <S.Texto>Não, não quero.</S.Texto>
              </S.Recused>
              <S.Avancar
                onClick={props.close}
                disabled={!pendCheck}
                style={{ background: !pendCheck ? '#666666' : '' }}
              >
                {!pendCheck && <S.IconeAvancar src="/avancar-desativado.svg"></S.IconeAvancar>}
                {pendCheck && <S.IconeAvancar src="/avancar.svg"></S.IconeAvancar>}
                <S.Texto style={{ color: !pendCheck ? 'rgba(255, 255, 255, 0.50)' : '#FFFFFF' }}>Avançar fase</S.Texto>
              </S.Avancar>
            </S.RecusedAvancar>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
