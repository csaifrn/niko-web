import { LoteData } from '../../data/LoteData';
import {useState} from 'react';
import * as S from './styles';
import { useParams } from 'react-router-dom';

interface AvancarModalProps {
  close: () => void;
}

export const AvancarModal = (props: AvancarModalProps) => {

  let { id } = useParams();
  const [lote , setLote] = useState(LoteData);
  const task = lote.filter((task:any) => task.id == id)[0];
  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea>
          <S.ModalContent>
            <S.NameClose>
              <S.Titulo> Deseja avançar para fase? </S.Titulo>
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
              <S.Avancar onClick={props.close}>
                <S.IconeAvancar src="/avancar.svg"></S.IconeAvancar>
                <S.Texto>Avançar fase</S.Texto>
              </S.Avancar>
            </S.RecusedAvancar>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
