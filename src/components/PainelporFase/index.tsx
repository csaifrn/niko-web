import { useState } from 'react';
import * as S from './styles';
import { date } from 'yup';

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

  const [dataInicial, setDataInicial] = useState(new Date());

  const [dtIncialInvalida, setDtIncialInvalida] = useState(false);

  const [dtFinalInvalida, setDtFinalInvalida] = useState(false);

  const dataHoje = new Date();

  const handlePegarDataInicial = (e: any) => {
    const dia = e.target.value.split('-')[0];
    const mes = e.target.value.split('-')[1];
    const ano = e.target.value.split('-')[2];
    const dataEscolhida = new Date(`${dia}/${mes}/${ano}`);

    if (dataEscolhida <= dataHoje) {
      setDataInicial(dataEscolhida);
      setDtIncialInvalida(false);
    } else {
      setDtIncialInvalida(true);
    }
    //else {
    //   console.log('dataEscolhida é igual a dataHoje');
    // }
  };

  const [dataFinal, setDataFinal] = useState(new Date());

  const handlePegarDataFinal = (e: any) => {
    const dia = e.target.value.split('-')[0];
    const mes = e.target.value.split('-')[1];
    const ano = e.target.value.split('-')[2];
    const dataEscolhida = new Date(`${dia}/${mes}/${ano}`);

    if (dataEscolhida > dataInicial && dataEscolhida <= dataHoje) {
      setDataFinal(dataEscolhida);
      setDtFinalInvalida(false);
    } else {
      setDtFinalInvalida(true);
    }
  };

  return (
    <S.Wrapper>
      <S.PainelTitulo>Painel por fase</S.PainelTitulo>

      <S.ContainerData>
        <S.FiltrarPorPeriodo>
          <S.FiltrarTitulo> Filtrar por período: </S.FiltrarTitulo>

          <S.EscolherDatas>
            <S.DataInicial>
              <S.DataText>De:</S.DataText>
              <S.Filter onChange={handlePegarDataInicial} type="date" />
            </S.DataInicial>

            <S.DataFinal>
              <S.DataText>A:</S.DataText>
              <S.Filter onChange={handlePegarDataFinal} type="date" />
            </S.DataFinal>

            {/* Quando as datas estiverem ok */}
            {dtIncialInvalida == false && dtFinalInvalida == false && <S.BotaoFiltrar> Filtrar </S.BotaoFiltrar>}

            {/* Quando as duas datas estiverem inválidas */}
            {dtIncialInvalida == true && dtFinalInvalida == true && (
              <S.BotaoFiltrarDesativado> Filtrar </S.BotaoFiltrarDesativado>
            )}

            {/* Quando apenas a data inicial estiver inválida */}
            {dtIncialInvalida == true && dtFinalInvalida == false && (
              <S.BotaoFiltrarDesativado> Filtrar </S.BotaoFiltrarDesativado>
            )}

            {/* Quando apenas a data final estiver inválida */}
            {dtIncialInvalida == false && dtFinalInvalida == true && (
              <S.BotaoFiltrarDesativado> Filtrar </S.BotaoFiltrarDesativado>
            )}

          </S.EscolherDatas>

          {dtIncialInvalida && (
            <S.DataInvalidaMessage>
              A data inicial inserida é inválida , insira uma data igual ou mais antiga que a de hoje
            </S.DataInvalidaMessage>
          )}

          {dtFinalInvalida && (
            <S.DataInvalidaMessage>
              A data final inserida é inválida , insira uma data que seja igual ou mais antiga que a de hoje,  e posterior à data inicial
            </S.DataInvalidaMessage>
          )}
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
