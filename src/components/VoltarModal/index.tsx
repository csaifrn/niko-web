import { useParams } from 'react-router-dom';
import * as S from './styles';
import { useState } from 'react';
import { LoteData } from '../../data/LoteData';

interface VoltarModalProps {
  close: () => void;
}

export const VoltarModal = (props: VoltarModalProps) => {
  let { id } = useParams();
  const [lote , setLote] = useState(LoteData);
  const task = lote.filter((task:any) => task.id == id)[0];
  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea>
          <S.ModalContent>
            <S.NameClose>
              <S.Titulo> Deseja voltar para fase? </S.Titulo>
            </S.NameClose>

            {/* PENDÊNCIAS */}
              {task.pendencias.map((pend: any) => (
                <S.PendDivBlack key={pend.PendId}  >
                  <S.PendenciaTextIcon>
                    {<S.AlertIcon src={pend.pend_icon} alt="ícone de alerta" />}
                    {pend.titulo}
                  </S.PendenciaTextIcon>

                  <S.LabelPendencia className="checkbox-container">
                    <S.SelectPendencia type="checkbox"></S.SelectPendencia>
                    <S.SpanPendencia className="checkmark"></S.SpanPendencia>
                  </S.LabelPendencia>
                </S.PendDivBlack>
              ))}
            <S.RecusedAvancar>
              <S.Recused onClick={props.close}><S.Texto>Não, não quero.</S.Texto></S.Recused>
              <S.Voltar onClick={props.close}>
                <S.IconeVoltar src="/voltar.svg"></S.IconeVoltar>
                <S.Texto>Voltar fase</S.Texto>
              </S.Voltar>
            </S.RecusedAvancar>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
