import * as S from './styles';

export const PainelPorFase = () => {
  return (
    <S.Wrapper>
      <S.ContainerData>
        <S.ContainerFilterNumber>
          <S.QtdLotes>
            <S.NumberOrange>172</S.NumberOrange> Lotes
          </S.QtdLotes>
          <S.Filter>
            <S.Opiton selected>Semana Passada</S.Opiton>
            <S.Opiton selected>Semana Retrasada</S.Opiton>
            <S.Opiton selected>Semana 14/02</S.Opiton>
          </S.Filter>
        </S.ContainerFilterNumber>
        <S.DataFaseDois>
          <S.ContainerDataFase>
            <S.ContainerImg src="/icon-page/recebidos.png" />
            <S.DataFase>
              <S.NumberTextData>
                <S.DataFaseTxtCenter>
                  <S.NumberGreen>12</S.NumberGreen> Concluídos
                </S.DataFaseTxtCenter>
              </S.NumberTextData>
            </S.DataFase>
          </S.ContainerDataFase>
          <S.ContainerDataFase>
            <S.ContainerImg src="/icon-page/arquivamento.png" />
            <S.DataFase>
              <S.NumberTextData>
                <S.DataFaseTxtCenter>
                  <S.NumberGreen>12</S.NumberGreen> Concluídos
                </S.DataFaseTxtCenter>
              </S.NumberTextData>
            </S.DataFase>
          </S.ContainerDataFase>
        </S.DataFaseDois>
        <S.ContainerDataFase>
          <S.ContainerImg src="/icon-page/preparo.png" />
          <S.DataFase>
            <S.NumberTextData>
              <S.DataFaseTxt>
                <S.NumberRed>5</S.NumberRed> Faltaram
              </S.DataFaseTxt>
              <S.DataFaseTxt>
                <S.NumberGreen>12</S.NumberGreen> Foram concluidos
              </S.DataFaseTxt>
            </S.NumberTextData>
          </S.DataFase>
        </S.ContainerDataFase>
        <S.ContainerDataFase>
          <S.ContainerImg src="/icon-page/catalogacao.png" />
          <S.DataFase>
            <S.NumberTextData>
              <S.DataFaseTxt>
                <S.NumberRed>5</S.NumberRed> Faltaram
              </S.DataFaseTxt>
              <S.DataFaseTxt>
                <S.NumberGreen>12</S.NumberGreen> Foram concluidos
              </S.DataFaseTxt>
            </S.NumberTextData>
          </S.DataFase>
        </S.ContainerDataFase>
        <S.ContainerDataFase>
          <S.ContainerImg src="/icon-page/digitalizacao.png" />
          <S.DataFase>
            <S.NumberTextData>
              <S.DataFaseTxt>
                <S.NumberRed>5</S.NumberRed> Faltaram
              </S.DataFaseTxt>
              <S.DataFaseTxt>
                <S.NumberGreen>12</S.NumberGreen> Foram concluidos
              </S.DataFaseTxt>
            </S.NumberTextData>
          </S.DataFase>
        </S.ContainerDataFase>
        <S.ContainerDataFase>
          <S.ContainerImg src="/icon-page/upload.png" />
          <S.DataFase>
            <S.NumberTextData>
              <S.DataFaseTxt>
                <S.NumberRed>5</S.NumberRed> Faltaram
              </S.DataFaseTxt>
              <S.DataFaseTxt>
                <S.NumberGreen>12</S.NumberGreen> Foram concluidos
              </S.DataFaseTxt>
            </S.NumberTextData>
          </S.DataFase>
        </S.ContainerDataFase>
      </S.ContainerData>
    </S.Wrapper>
  );
};
