import * as S from './styles';

export const PainelPorFase = () => {
  const valores = [
    {
      fase: 1,
      concluidos: 5,
    },
    {
      fase: 2,
      concluidos: 12,
      faltaram: 5,
    },
    {
      fase: 3,
      concluidos: 12,
      faltaram: 5,
    },
    {
      fase: 4,
      concluidos: 12,
      faltaram: 5,
    },
    {
      fase: 5,
      concluidos: 12,
      faltaram: 5,
    },
    {
      fase: 6,
      concluidos: 12,
    },
  ];
  return (
    <S.Wrapper>
      <S.ContainerData>
        <S.ContainerFilterNumber>
          <S.QtdLotes>
            <S.NumberOrangeTitle>172</S.NumberOrangeTitle> Lotes
          </S.QtdLotes>

          <S.Filter type="week" />
        </S.ContainerFilterNumber>
        
        <S.Container>

          <S.DataFaseDois>
            <S.ContainerDataFase>
              <S.ContainerImg src="/icon-big/Recebimento_icon.svg" />
              <S.DataFase>
                <S.NumberTextDataUnic>
                  <S.DataFaseTxtCenter>
                    <S.NumberGreen>{valores.filter((valor) => valor.fase === 1)[0].concluidos}</S.NumberGreen>
                  </S.DataFaseTxtCenter>
                  <S.DataFaseTxtCenter>Remessas Recebidas</S.DataFaseTxtCenter>
                </S.NumberTextDataUnic>
              </S.DataFase>
            </S.ContainerDataFase>
            <S.ContainerDataFase>
              <S.ContainerImg src="/icon-big/Arquivamento_icon.svg" />
              <S.DataFase>
                <S.NumberTextDataUnic>
                  <S.DataFaseTxtCenter>
                    <S.NumberGreen>{valores.filter((valor) => valor.fase === 6)[0].concluidos}</S.NumberGreen>
                  </S.DataFaseTxtCenter>
                  <S.DataFaseTxtCenter>Concluídos</S.DataFaseTxtCenter>
                </S.NumberTextDataUnic>
              </S.DataFase>
            </S.ContainerDataFase>
          </S.DataFaseDois>
        
          <S.ContainerDataFase>
            <S.ContainerImg src="/icon-big/Preparo_icon.svg" />
            <S.DataFase>
              <S.NumberTextData>
                <S.NumberName>
                  <S.NumberTxt>
                    <S.NumberRed>{valores.filter((valor) => valor.fase === 2)[0].faltaram}</S.NumberRed>
                  </S.NumberTxt>
                  <S.DataFaseTxt>Faltaram</S.DataFaseTxt>
                </S.NumberName>

                <S.DataFaseTxt>
                  <S.NumberName>
                    <S.NumberTxt>
                      <S.NumberGreen>{valores.filter((valor) => valor.fase === 2)[0].concluidos}</S.NumberGreen>
                    </S.NumberTxt>
                    <S.DataFaseTxt>Concluídos</S.DataFaseTxt>
                  </S.NumberName>
                </S.DataFaseTxt>
              </S.NumberTextData>
            </S.DataFase>
          </S.ContainerDataFase>
          <S.ContainerDataFase>
            <S.ContainerImg src="/icon-big/Catalogacao_icon.svg" />
            <S.DataFase>
              <S.NumberTextData>
                <S.NumberName>
                  <S.NumberTxt>
                    <S.NumberRed>{valores.filter((valor) => valor.fase === 3)[0].faltaram}</S.NumberRed>
                  </S.NumberTxt>
                  <S.DataFaseTxt>Faltaram</S.DataFaseTxt>
                </S.NumberName>

                <S.DataFaseTxt>
                  <S.NumberName>
                    <S.NumberTxt>
                      <S.NumberGreen>{valores.filter((valor) => valor.fase === 3)[0].concluidos}</S.NumberGreen>
                    </S.NumberTxt>
                    <S.DataFaseTxt>Concluídos</S.DataFaseTxt>
                  </S.NumberName>
                </S.DataFaseTxt>
              </S.NumberTextData>
            </S.DataFase>
          </S.ContainerDataFase>
          <S.ContainerDataFase>
            <S.ContainerImg src="/icon-big/Digitalizacao_icon.svg" />
            <S.DataFase>
              <S.NumberTextData>
                <S.NumberName>
                  <S.NumberTxt>
                    <S.NumberRed>{valores.filter((valor) => valor.fase === 4)[0].faltaram}</S.NumberRed>
                  </S.NumberTxt>
                  <S.DataFaseTxt>Faltaram</S.DataFaseTxt>
                </S.NumberName>

                <S.DataFaseTxt>
                  <S.NumberName>
                    <S.NumberTxt>
                      <S.NumberGreen>{valores.filter((valor) => valor.fase === 4)[0].concluidos}</S.NumberGreen>
                    </S.NumberTxt>
                    <S.DataFaseTxt>Concluídos</S.DataFaseTxt>
                  </S.NumberName>
                </S.DataFaseTxt>
              </S.NumberTextData>
            </S.DataFase>
          </S.ContainerDataFase>
          <S.ContainerDataFase>
            <S.ContainerImg src="/icon-big/Upload_icon.svg" />
            <S.DataFase>
              <S.NumberTextData>
                <S.NumberName>
                  <S.NumberTxt>
                    <S.NumberRed>{valores.filter((valor) => valor.fase === 5)[0].faltaram}</S.NumberRed>
                  </S.NumberTxt>
                  <S.DataFaseTxt>Faltaram</S.DataFaseTxt>
                </S.NumberName>

                <S.DataFaseTxt>
                  <S.NumberName>
                    <S.NumberTxt>
                      <S.NumberGreen>{valores.filter((valor) => valor.fase === 5)[0].concluidos}</S.NumberGreen>
                    </S.NumberTxt>
                    <S.DataFaseTxt>Concluídos</S.DataFaseTxt>
                  </S.NumberName>
                </S.DataFaseTxt>
              </S.NumberTextData>
            </S.DataFase>
          </S.ContainerDataFase>
        </S.Container>

      </S.ContainerData>
    </S.Wrapper>
  );
};
