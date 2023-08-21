import { ArrowCircleLeft, Warning } from '@phosphor-icons/react';
import * as S from './styles';
import theme from '../../global/theme';

export const PendenciaCoord = () => {
  return (
    <S.Wrapper>
      <S.TituloH2>Pendências</S.TituloH2>
      <S.ContainerData>
        <S.ContainerNumber>
          <S.QtdLotes>Lote 117</S.QtdLotes>
          <S.Prioridade>Prioridade</S.Prioridade>
        </S.ContainerNumber>
        <S.DataAcao>
          <S.ContainerImg src="/icon-medium/Preparo.png" />
          <ArrowCircleLeft size={32} weight="fill" color={theme.colors['red/500']} />
          <S.ContainerImg src="/icon-medium/Digitalizacao.png" />
        </S.DataAcao>
        <S.YelloButton>Resolver Pendencia</S.YelloButton>
        <S.TextAlerta>
          <Warning size={32} color={theme.colors['yellow/300']} weight="fill" />
          <S.DataFaseTxt>Lote possui vários processos com páginas não numeradas</S.DataFaseTxt>
        </S.TextAlerta>
      </S.ContainerData>
    </S.Wrapper>
  );
};
