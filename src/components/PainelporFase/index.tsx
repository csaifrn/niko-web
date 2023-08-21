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
            <S.Opiton>Semana Retrasada</S.Opiton>
            <S.Opiton>Semana 14/02</S.Opiton>
          </S.Filter>
        </S.ContainerFilterNumber>
        <S.DataFaseDois>
          <S.ContainerDataFase>
            <S.ContainerImg src="/icon-page/Recepcao_icon.png" />
            <S.DataFase>
              <S.NumberTextData>
                <S.DataFaseTxtCenter>
                  <S.NumberGreen>12</S.NumberGreen> Concluídos
                </S.DataFaseTxtCenter>
              </S.NumberTextData>
            </S.DataFase>
          </S.ContainerDataFase>
          <S.ContainerDataFase>
            <S.ContainerImg src="/icon-page/Arquivamento_icon.png" />
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
          <S.ContainerImg src="/icon-page/Preparo_icon.png" />
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
          <S.ContainerImg src="/icon-page/Catalogacao_icon.png" />
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
          <S.ContainerImg src="/icon-page/Digitalizacao_icon.png" />
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
          <S.ContainerImg src="/icon-page/Upload_icon.png" />
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
