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
      <S.PainelTitulo>Painel por fase</S.PainelTitulo>

      <S.ContainerData>
        <S.FiltrarPorPeriodo>

          <S.FiltrarTitulo> Filtrar por período: </S.FiltrarTitulo>

          <S.EscolherDatas>

            <S.DataInicial>
              <S.DataText>De:</S.DataText>
              <S.Filter type="date" />
            </S.DataInicial>

            <S.DataFinal>
              <S.DataText>A:</S.DataText>
              <S.Filter type="date" />
            </S.DataFinal>

            <S.BotaoFiltrar> Filtrar </S.BotaoFiltrar>

          </S.EscolherDatas>

        </S.FiltrarPorPeriodo>

        <S.ContainerFilterNumber>
          <S.QtdLotes>
            <S.NumberOrangeTitle>172</S.NumberOrangeTitle> Lotes
          </S.QtdLotes>
        </S.ContainerFilterNumber>

        <S.Container>
          <S.DataFaseDois>
            <S.ContainerDataFase>
              <S.ContainerImg src="/icon-big/Recepção.svg" />
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
              <S.ContainerImg src="/icon-big/Arquivamento.svg" />
              <S.DataFase>
                <S.NumberTextDataUnic>
                  <S.DataFaseTxtCenter>
                    <S.NumberGreen>{valores.filter((valor) => valor.fase === 6)[0].concluidos}</S.NumberGreen>
                  </S.DataFaseTxtCenter>
                  <S.DataFaseTxtCenter>Foram concluídos</S.DataFaseTxtCenter>
                </S.NumberTextDataUnic>
              </S.DataFase>
            </S.ContainerDataFase>
          </S.DataFaseDois>

          <S.FasesDoMeio>
            <S.ContainerDataFase>
              <S.ContainerImg src="/icon-big/Preparo.svg" />
              <S.DataFase>
                <S.NumberTextData>
                  <S.NumberName>
                    <S.NumberTxt>
                      <S.NumberRed>{valores.filter((valor) => valor.fase === 2)[0].faltaram}</S.NumberRed>
                    </S.NumberTxt>
                    <S.DataFaseTxt>Não foram concluídos</S.DataFaseTxt>
                  </S.NumberName>

                  <S.DataFaseTxt>
                    <S.NumberName>
                      <S.NumberTxt>
                        <S.NumberGreen>{valores.filter((valor) => valor.fase === 2)[0].concluidos}</S.NumberGreen>
                      </S.NumberTxt>
                      <S.DataFaseTxt>Foram concluídos</S.DataFaseTxt>
                    </S.NumberName>
                  </S.DataFaseTxt>
                </S.NumberTextData>
              </S.DataFase>
            </S.ContainerDataFase>

            <S.ContainerDataFase>
              <S.ContainerImg src="/icon-big/Catalogação.svg" />
              <S.DataFase>
                <S.NumberTextData>
                  <S.NumberName>
                    <S.NumberTxt>
                      <S.NumberRed>{valores.filter((valor) => valor.fase === 3)[0].faltaram}</S.NumberRed>
                    </S.NumberTxt>
                    <S.DataFaseTxt>Não foram concluídos</S.DataFaseTxt>
                  </S.NumberName>

                  <S.DataFaseTxt>
                    <S.NumberName>
                      <S.NumberTxt>
                        <S.NumberGreen>{valores.filter((valor) => valor.fase === 3)[0].concluidos}</S.NumberGreen>
                      </S.NumberTxt>
                      <S.DataFaseTxt>Foram concluídos</S.DataFaseTxt>
                    </S.NumberName>
                  </S.DataFaseTxt>
                </S.NumberTextData>
              </S.DataFase>
            </S.ContainerDataFase>
            <S.ContainerDataFase>
              <S.ContainerImg src="/icon-big/Digitalização.svg" />
              <S.DataFase>
                <S.NumberTextData>
                  <S.NumberName>
                    <S.NumberTxt>
                      <S.NumberRed>{valores.filter((valor) => valor.fase === 4)[0].faltaram}</S.NumberRed>
                    </S.NumberTxt>
                    <S.DataFaseTxt>Não foram concluídos</S.DataFaseTxt>
                  </S.NumberName>

                  <S.DataFaseTxt>
                    <S.NumberName>
                      <S.NumberTxt>
                        <S.NumberGreen>{valores.filter((valor) => valor.fase === 4)[0].concluidos}</S.NumberGreen>
                      </S.NumberTxt>
                      <S.DataFaseTxt>Foram concluídos</S.DataFaseTxt>
                    </S.NumberName>
                  </S.DataFaseTxt>
                </S.NumberTextData>
              </S.DataFase>
            </S.ContainerDataFase>
            <S.ContainerDataFase>
              <S.ContainerImg src="/icon-big/Upload.svg" />
              <S.DataFase>
                <S.NumberTextData>
                  <S.NumberName>
                    <S.NumberTxt>
                      <S.NumberRed>{valores.filter((valor) => valor.fase === 5)[0].faltaram}</S.NumberRed>
                    </S.NumberTxt>
                    <S.DataFaseTxt>Não foram concluídos</S.DataFaseTxt>
                  </S.NumberName>

                  <S.DataFaseTxt>
                    <S.NumberName>
                      <S.NumberTxt>
                        <S.NumberGreen>{valores.filter((valor) => valor.fase === 5)[0].concluidos}</S.NumberGreen>
                      </S.NumberTxt>
                      <S.DataFaseTxt>Foram concluídos</S.DataFaseTxt>
                    </S.NumberName>
                  </S.DataFaseTxt>
                </S.NumberTextData>
              </S.DataFase>
            </S.ContainerDataFase>
          </S.FasesDoMeio>
        </S.Container>
      </S.ContainerData>
    </S.Wrapper>
  );
};
