import { useEffect, useState } from 'react';
import * as S from './styles';
import { date, string } from 'yup';
import { Link, useParams } from 'react-router-dom';

export const PainelPorFase = () => {
  const valores = [
    {
      fase: 1,
      concluidos: 152,
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

  const [dtInicialInvalida, setDtIncialInvalida] = useState(false);

  const [dtFinalInvalida, setDtFinalInvalida] = useState(false);

  const [msgErroDataInicial, setmsgErroDataInicial] = useState<string>();

  const [msgErro, setMsgErro] = useState<string>();

  const dataAtual = new Date();
  const dia = dataAtual.getDate();
  const mes = dataAtual.getMonth();
  const ano = dataAtual.getFullYear();
  const dataHoje = new Date(ano, mes, dia, 0, 0, 0);

  const [dataInicial, setDataInicial] = useState<Date>(new Date(dataHoje));

  const [dataInicialEmString, setDataInicialEmString] = useState<string>();

  const [dataFinalEmString, setDataFinalEmString] = useState<string>();

  useEffect(() => {
    if (String(dia).length == 1) {
      setDataInicialEmString(`${ano}-${mes + 1}-0${dia}`);
      setDataFinalEmString(`${ano}-${mes + 1}-0${dia}`);
    } else {
      setDataInicialEmString(`${ano}-${mes + 1}-${dia}`);
      setDataFinalEmString(`${ano}-${mes + 1}-${dia}`);
    }
  }, []);

  //Função pra pegar a data inicial escolhida pelo usuário
  const handlePegarDataInicial = (e: any) => {
    const dia = e.target.value.split('-')[0];
    const mes = e.target.value.split('-')[1];
    const ano = e.target.value.split('-')[2];
    const dataEscolhida = new Date(`${dia}/${mes}/${ano}`);

    dataEscolhida.setHours(0, 0, 0);
    setDataInicialEmString(`${dia}-${mes}-${ano}`);
    // Verifica se a data inicial escolhida é mais nova que a data de hoje
    if (dataEscolhida > dataHoje) {
      //A data passa a ser inválida
      setDtIncialInvalida(true);
      setmsgErroDataInicial('A data inicial é invalida. Por favor insira uma data igual ou mais antiga que a de hoje');
    } else {
      setDtIncialInvalida(false);
      setDataInicial(dataEscolhida);
    }
  };

  const [dataFinal, setDataFinal] = useState<Date>(new Date(dataHoje));

  //Função pra pegar a data final escolhida pelo usuário
  const handlePegarDataFinal = (e: any) => {
    const dia = e.target.value.split('-')[0];
    const mes = e.target.value.split('-')[1];
    const ano = e.target.value.split('-')[2];
    const dataEscolhida = new Date(`${dia}/${mes}/${ano}`);
    dataEscolhida.setHours(0, 0, 0);

    console.log('A data escolhida foi:' + dataEscolhida);
    setDataFinalEmString(`${dia}-${mes}-${ano}`);
    // Verifica se a data final escolhida é mais nova que a data de hoje
    if (dataEscolhida > dataHoje) {
      setDtFinalInvalida(true);
      setMsgErro('Por favor insira uma data igual ou mais recente que a de hoje');
    }
    // Verifica se a data final escolhida é mais nova que a data inicial escolhida
    else if (dataInicial != undefined && dataInicial > dataEscolhida) {
      setDtFinalInvalida(true);
      setMsgErro('Por favor insira uma data igual ou mais recente que a inicial');
    } else {
      setDtFinalInvalida(false);
    }
  };

  console.log('A data inicial é:' + dataInicial);

  console.log('A data final é:' + dataFinal);

  const { id } = useParams();

  return (
    <S.Wrapper>
      <S.PainelTitulo> Painel por fase </S.PainelTitulo>

      <S.ContainerData>
        <S.FiltrarPorPeriodo>
          <S.FiltrarTitulo> Filtrar por período: </S.FiltrarTitulo>

          <S.EscolherDatas>
            <S.DataInicial>
              <S.DataText>De:</S.DataText>
              <S.Filter onChange={handlePegarDataInicial} value={dataInicialEmString || ''} type="date" />
            </S.DataInicial>

            <S.DataFinal>
              <S.DataText>Até:</S.DataText>
              <S.Filter onChange={handlePegarDataFinal} value={dataFinalEmString || ''} type="date" />
            </S.DataFinal>

            {/* BOTÃO DE FILTRAR */}

            {/* Quando as datas estiverem ok */}
            {dtInicialInvalida == false && dtFinalInvalida == false && <S.BotaoFiltrar> Filtrar </S.BotaoFiltrar>}

            {/* Quando as duas datas estiverem inválidas */}
            {dtInicialInvalida == true && dtFinalInvalida == true && (
              <S.BotaoFiltrarDesativado> Filtrar </S.BotaoFiltrarDesativado>
            )}

            {/* Quando apenas a data inicial estiver inválida */}
            {dtInicialInvalida == true && dtFinalInvalida == false && (
              <S.BotaoFiltrarDesativado> Filtrar </S.BotaoFiltrarDesativado>
            )}

            {/* Quando apenas a data final estiver inválida */}
            {dtInicialInvalida == false && dtFinalInvalida == true && (
              <S.BotaoFiltrarDesativado> Filtrar </S.BotaoFiltrarDesativado>
            )}
          </S.EscolherDatas>

          {/* MENSAGEM DE ERRO MOSTRADA EM CASO DE DATA INVÁLIDA */}

          {dtInicialInvalida && <S.DataInvalidaMessage>{msgErroDataInicial}</S.DataInvalidaMessage>}

          {dtFinalInvalida && <S.DataInvalidaMessage>A data final é inválida. {msgErro}</S.DataInvalidaMessage>}
        </S.FiltrarPorPeriodo>

        {/* RECEPÇÃO */}
        <S.DivRemessasRecepcao>
          <S.ContainerDataFaseRecepcao>
            <Link to={`/Fase/${id}/Board/Recebidos`}>
              <S.CardFaseColorful style={{ backgroundColor: '#F32D2D' }}>
                <img src="/icon-big/IconOpenFile.svg" />
              </S.CardFaseColorful>
            </Link>

            <S.CardFaseBlack>
              <S.NumberTextDataUnic>
                <S.NumberOrangeTitle>{valores.filter((valor) => valor.fase === 1)[0].concluidos}</S.NumberOrangeTitle>
                <S.DataFaseTxtCenter>Remessas Recebidas</S.DataFaseTxtCenter>
              </S.NumberTextDataUnic>
            </S.CardFaseBlack>
          </S.ContainerDataFaseRecepcao>
        </S.DivRemessasRecepcao>

        <S.PainelPorFaseLotes>
          {/* CONTAGEM DE LOTES */}
          <S.ContainerFilterNumber>
            <S.QtdLotes>
              <S.NumberOrangeTitle>172</S.NumberOrangeTitle> Lotes
            </S.QtdLotes>
          </S.ContainerFilterNumber>

          <S.FasesDoMeio>
            {/* PREPARO */}
            <S.ContainerDataFase>
              <Link to={`/Fase/${id}/Board/Preparo`}>
                <S.CardFaseColorful style={{ backgroundColor: '#F3802D' }}>
                  <img src="/icon-big/IconClean.svg" />
                </S.CardFaseColorful>
              </Link>

              <S.CardFaseBlack>
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
              </S.CardFaseBlack>
            </S.ContainerDataFase>

            {/* CATALOGAÇÃO */}
            <S.ContainerDataFase>
              <Link to={`/Fase/${id}/Board/Catalogacao`}>
                <S.CardFaseColorful style={{ backgroundColor: '#EAC503' }}>
                  <img src="/icon-big/IconBookMark.svg" />
                </S.CardFaseColorful>
              </Link>

              <S.CardFaseBlack>
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
              </S.CardFaseBlack>
            </S.ContainerDataFase>

            {/* DIGITALIZAÇÃO */}
            <S.ContainerDataFase>
              <Link to={`/Fase/${id}/Board/Digitalizacao`}>
                <S.CardFaseColorful style={{ backgroundColor: '#2D94F3' }}>
                  <img src="/icon-big/IconScanner.svg" />
                </S.CardFaseColorful>
              </Link>

              <S.CardFaseBlack>
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
              </S.CardFaseBlack>
            </S.ContainerDataFase>

            {/* UPLOAD */}
            <S.ContainerDataFase>
              <Link to={`/Fase/${id}/Board/Upload`}>
                <S.CardFaseColorful style={{ backgroundColor: '#9747FF' }}>
                  <img src="/icon-big/IconUpload.svg" />
                </S.CardFaseColorful>
              </Link>

              <S.CardFaseBlack>
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
              </S.CardFaseBlack>
            </S.ContainerDataFase>

            {/* ARQUIVAMENTO */}
            <S.ContainerDataFase>

              <Link to={`/Fase/${id}/Board/Arquivamento`}>
                <S.CardFaseColorful style={{ backgroundColor: '#43DB6D' }}>
                  <img src="/icon-big/IconCheckFile.svg" />
                </S.CardFaseColorful>
              </Link>

              <S.CardFaseBlack>
                <S.NumberNameArquivamento>
                  <S.NumberGreen>{valores.filter((valor) => valor.fase === 5)[0].concluidos}</S.NumberGreen>
                  <S.DataFaseTxt>Foram concluídos</S.DataFaseTxt>
                </S.NumberNameArquivamento>
              </S.CardFaseBlack>

            </S.ContainerDataFase>

          </S.FasesDoMeio>

        </S.PainelPorFaseLotes>
      </S.ContainerData>
    </S.Wrapper>
  );
};
