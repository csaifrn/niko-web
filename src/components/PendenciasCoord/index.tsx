import { ArrowCircleLeft, ArrowCircleRight, Warning } from '@phosphor-icons/react';
import * as S from './styles';
import theme from '../../global/theme';
import { useState } from 'react';
import { ModalResolverPendencia } from '../ModalResolverPendencia';

export const Pend = [
  {
    id: '1',
    id_projeto: '2',
    lote: '117',
    fase_atual: 'Catalogacao',
    fase_final: 'Digitalização',
    comment: 'Lote possui vários processos com páginas não numeradas',
    voltar: false,
    decisao: false,
  },
  {
    id: '2',
    id_projeto: '1',
    lote: '120',
    fase_atual: 'Upload',
    fase_final: '',
    comment: 'Lote possui vários processos com páginas não numeradas...',
    voltar: true,
    decisao: false,
  },
];

export const PendenciaCoord = () => {
  const [modalResolver, setModalResolver] = useState(false);
  const [pend, setPend] = useState<(typeof Pend)[0]>();

  return (
    <S.Wrapper>
      <S.TituloH2>Pendências</S.TituloH2>
      {Pend.length > 0 ? (
        <S.ContainerDataDependencias>
          {Pend.map((pendencia) => {
            return (
              <S.ContainerData key={pendencia.id}>
                <S.ContainerNumber>
                  <S.QtdLotes>Lote {pendencia.lote}</S.QtdLotes>
                  <S.Prioridade>Prioridade</S.Prioridade>
                </S.ContainerNumber>
                {pendencia.fase_final.length > 0 ? (
                  <S.DataAcao>
                    <S.ContainerImg src={`/icon-medium/${pendencia.fase_atual}.png`} />
                    {pendencia.voltar ? (
                      <ArrowCircleLeft size={2} weight="fill" color={theme.colors['red/500']} />
                    ) : (
                      <ArrowCircleRight size={32} weight="fill" color={theme.colors['green/400']} />
                    )}
                    <S.ContainerImg src={`/icon-medium/${pendencia.fase_final}.png`} />
                  </S.DataAcao>
                ) : (
                  <S.Fase>
                    <S.ContainerImg src={`/icon-medium/${pendencia.fase_atual}.png`} />
                  </S.Fase>
                )}

                <S.YelloButton
                  onClick={() => {
                    setModalResolver(!modalResolver);
                    setPend(pendencia);
                  }}
                >
                  Resolver Pendencia
                </S.YelloButton>
                <S.TextAlerta>
                  <div>
                    <Warning size={24} color={theme.colors['yellow/300']} weight="fill" />
                  </div>

                  <S.DataFaseTxt>{pendencia.comment}</S.DataFaseTxt>
                </S.TextAlerta>
              </S.ContainerData>
            );
          })}
        </S.ContainerDataDependencias>
      ) : (
        <S.ContainerEmpty>
          <img src="/EmptyContent.png" alt="" />
          <S.DataFaseTxt>Ops! parece que não tem nenhuma de pendencia! </S.DataFaseTxt>
        </S.ContainerEmpty>
      )}
      {modalResolver && <ModalResolverPendencia pendencia={pend} close={() => setModalResolver(!modalResolver)} />}
    </S.Wrapper>
  );
};
