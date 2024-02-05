import { useEffect, useState } from 'react';
import * as S from './styles';
import { Link, useParams } from 'react-router-dom';
import theme from '../../global/theme';
import { Tooltip } from 'react-tooltip';
import { useMutation } from 'react-query';
import { ListBatchesData } from '../../api/services/batches/list-batches';

interface LoteProps {
  batch_main_status: number;
  batch_specific_status: number;
}

export const PainelPorFase = () => {
  const { id } = useParams();

  //Data atual em Date
  const currentDate = new Date();
  //Mês atual em Date
  currentDate.setMonth(currentDate.getMonth() - 1);
  //Data de 1 mês atrás em string
  const defaultPreviousMonthDate = currentDate.toISOString().substring(0, 10);
  //Data atual em string
  const defaultDate = new Date().toISOString().substring(0, 10);

  const [dataInicial, setDataInicial] = useState(defaultPreviousMonthDate);
  const [dataFinal, setDataFinal] = useState(defaultDate);

  //Função pra pegar a data inicial escolhida pelo usuário
  const handlePegarDataInicial = (e: any) => {
    const dia = e.target.value.split('-')[0];
    const mes = e.target.value.split('-')[1];
    const ano = e.target.value.split('-')[2];
    setDataInicial(`${dia}-${mes}-${ano}`);
    const dataInicialEscolhida = new Date(`${dia}/${mes}/${ano}`);
    dataInicialEscolhida.setHours(0, 0, 0);
    const dtFinal = new Date(dataFinal);
    dtFinal.setHours(0, 0, 0);
  };

  //Função pra pegar a data final escolhida pelo usuário
  const handlePegarDataFinal = (e: any) => {
    const dia = e.target.value.split('-')[0];
    const mes = e.target.value.split('-')[1];
    const ano = e.target.value.split('-')[2];
    setDataFinal(`${dia}-${mes}-${ano}`);
    const dataFinalEscolhida = new Date(`${dia}/${mes}/${ano}`);
    dataFinalEscolhida.setHours(0, 0, 0);
    const dtInicial = new Date(dataFinal);
    dtInicial.setHours(0, 0, 0);
  };

  //Quantidade total de lotes criados
  const [lotes, setLotes] = useState<any>();
  const [quantLotes, setQuantLotes] = useState<number>();
  const FiltrarLotesMutate = useMutation(ListBatchesData, {
    onSuccess: (data) => {
      setLotes(data.batches);
      setQuantLotes(data.batches_count);
      //console.log(data);
    },
  });

  //Lotes no Preparo
  const [QuantlotesPreparo, setQuantLotesPreparo] = useState<number>(0);
  const FiltrarLotesNoPreparo = () => {
    const QuantLotesPreparo =
      lotes != undefined ? lotes.filter((lotes: LoteProps) => lotes.batch_main_status == 0) : undefined;
    if (QuantLotesPreparo != undefined) {
      setQuantLotesPreparo(QuantLotesPreparo.length);
    }
  };

  //Lotes na Catalogação
  const [QuantlotesCatalogacao, setQuantLotesCatalogacao] = useState<number>(0);
  const FiltrarLotesNaCatalogacao = () => {
    const QuantLotesCatalogacao =
      lotes != undefined ? lotes.filter((lotes: LoteProps) => lotes.batch_main_status == 1) : undefined;
    if (QuantLotesCatalogacao != undefined) {
      setQuantLotesCatalogacao(QuantLotesCatalogacao.length);
    }
  };

  //Lotes na Digitalização
  const [QuantlotesDigitalizacao, setQuantLotesDigitalizacao] = useState<number>(0);
  const FiltrarLotesNaDigitalizacao = () => {
    const QuantLotesDigitalizacao =
      lotes != undefined ? lotes.filter((lotes: LoteProps) => lotes.batch_main_status == 2) : undefined;
    if (QuantLotesDigitalizacao != undefined) {
      setQuantLotesDigitalizacao(QuantLotesDigitalizacao.length);
    }
  };

  //Lotes no Upload
  const [QuantlotesUpload, setQuantLotesUpload] = useState<number>(0);
  const FiltrarLotesNoUpload = () => {
    const QuantLotesUpload =
      lotes != undefined ? lotes.filter((lotes: LoteProps) => lotes.batch_main_status == 3) : undefined;
    if (QuantLotesUpload != undefined) {
      setQuantLotesUpload(QuantLotesUpload.length);
    }
  };

  //Lotes Arquivados
  const [QuantlotesArquivados, setQuantLotesArquivados] = useState<number>(0);
  const FiltrarLotesArquivados = () => {
    const QuantLotesArquivados =
      lotes != undefined
        ? lotes.filter((lotes: LoteProps) => lotes.batch_main_status == 4 && lotes.batch_specific_status == 2)
        : undefined;
    if (QuantLotesArquivados != undefined) {
      setQuantLotesArquivados(QuantLotesArquivados.length);
    }
  };

  useEffect(() => {
    FiltrarLotesMutate.mutate({ start_date: dataInicial, end_date: dataFinal });
  }, []);

  useEffect(() => {
    FiltrarLotesNoPreparo();
    FiltrarLotesNaCatalogacao();
    FiltrarLotesNaDigitalizacao();
    FiltrarLotesNoUpload();
    FiltrarLotesArquivados();
  }, [lotes]);

  return (
    <S.Wrapper>
      <S.ContainerData>
        <S.FiltrarPorPeriodo>
          <S.FiltrarTitulo> Filtrar lotes criados por período: </S.FiltrarTitulo>

          <S.EscolherDatas>
            <S.DataInicial>
              <S.DataText>De:</S.DataText>
              <S.Filter
                onChange={handlePegarDataInicial}
                value={dataInicial || ''}
                type="date"
                max={dataFinal != '-undefined-undefined' ? dataFinal : defaultDate}
                min={'2022-06-20'}
              />
            </S.DataInicial>

            <S.DataFinal>
              <S.DataText>Até:</S.DataText>
              <S.Filter
                onChange={handlePegarDataFinal}
                value={dataFinal || ''}
                type="date"
                max={defaultDate}
                min={dataInicial}
              />
            </S.DataFinal>
          </S.EscolherDatas>

          {/* BOTÃO DE FILTRAR POR DATA */}

          {dataInicial == '-undefined-undefined' || dataFinal == '-undefined-undefined' ? (
            <>
              <S.NumberRed style={{ fontSize: '12px' }}>
                A data não pode estar vazia. Por favor escolha uma data válida
              </S.NumberRed>
              <S.BotaoFiltrarDesativado disabled> Filtrar </S.BotaoFiltrarDesativado>
            </>
          ) : (
            <S.BotaoFiltrar onClick={() => FiltrarLotesMutate.mutate({ start_date: dataInicial, end_date: dataFinal })}>
              {' '}
              Filtrar{' '}
            </S.BotaoFiltrar>
          )}
        </S.FiltrarPorPeriodo>

        {/* RECEPÇÃO */}
        {/* <S.DivRemessasRecepcao>
          <S.ContainerDataFaseRecepcao>
            <Link to={`/Fases/Board/Recebidos`} className="RecepTooltip">
              <S.CardFaseColorful style={{ backgroundColor: theme.colors['red/300'] }}>
                <img src="/icon-big/IconOpenFile.svg" />
              </S.CardFaseColorful>
              <Tooltip
                children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Recepção</p>}
                anchorSelect=".RecepTooltip"
                place="bottom"
              />
            </Link>

            <S.CardFaseBlack>
              <S.NumberTextDataUnic>
                <S.NumberOrangeTitle>{valores.filter((valor) => valor.fase === 1)[0].concluidos}</S.NumberOrangeTitle>
                <S.DataFaseTxtCenter>Remessas Recebidas</S.DataFaseTxtCenter>
              </S.NumberTextDataUnic>
            </S.CardFaseBlack>

          </S.ContainerDataFaseRecepcao>
        </S.DivRemessasRecepcao> */}

        <S.PainelPorFaseLotes>
          {/* CONTAGEM DE LOTES */}
          <S.ContainerFilterNumber>
            {quantLotes == 1 && (
              <S.QtdLotes>
                <S.NumberOrangeTitle>{quantLotes}</S.NumberOrangeTitle> lote criado
              </S.QtdLotes>
            )}
            {quantLotes != undefined && quantLotes > 1 && (
              <S.QtdLotes>
                <S.NumberOrangeTitle>{quantLotes}</S.NumberOrangeTitle> lotes criados
              </S.QtdLotes>
            )}
          </S.ContainerFilterNumber>

          {quantLotes == 0 ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '16px',
                marginTop: '-32px',
              }}
            >
              <img src="/Empty.svg" height={'225em'} width={'226em'} />
              {quantLotes == 0 && <S.QtdLotes>Nenhum lote foi criado nesse período</S.QtdLotes>}
            </div>
          ) : (
            <S.FasesDoMeio>
              {/* PREPARO */}
              <S.ContainerDataFase>
                <Link to={`/Fases/Board/Preparo`} className="PreparoTooltip">
                  <S.CardFaseColorful style={{ backgroundColor: theme.colors['orange/400'] }}>
                    <img src="/icon-big/IconClean.svg" />
                  </S.CardFaseColorful>
                  <Tooltip
                    children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Preparo</p>}
                    anchorSelect=".PreparoTooltip"
                    place="bottom"
                  />
                </Link>

                <S.CardFaseBlack>
                  <S.NumberTextData>
                    {QuantlotesPreparo == 0 && <S.DataFaseTxt>nenhum está no Preparo</S.DataFaseTxt>}

                    {QuantlotesPreparo == 1 && (
                      <S.NumberName>
                        <S.NumberTxt>
                          <S.NumberGreen>{QuantlotesPreparo}</S.NumberGreen>
                        </S.NumberTxt>
                        <S.DataFaseTxt>está no Preparo</S.DataFaseTxt>
                      </S.NumberName>
                    )}

                    {QuantlotesPreparo != undefined && QuantlotesPreparo > 1 && (
                      <S.NumberName>
                        <S.NumberTxt>
                          <S.NumberGreen>{QuantlotesPreparo}</S.NumberGreen>
                        </S.NumberTxt>
                        <S.DataFaseTxt>estão no Preparo</S.DataFaseTxt>
                      </S.NumberName>
                    )}
                  </S.NumberTextData>
                </S.CardFaseBlack>
              </S.ContainerDataFase>

              {/* CATALOGAÇÃO */}
              <S.ContainerDataFase>
                <Link to={`/Fases/Board/Catalogação`} className="CatalogTooltip">
                  <S.CardFaseColorful style={{ backgroundColor: theme.colors['yellow/500'] }}>
                    <img src="/icon-big/IconBookMark.svg" />
                  </S.CardFaseColorful>
                  <Tooltip
                    children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Catalogação</p>}
                    anchorSelect=".CatalogTooltip"
                    place="bottom"
                  />
                </Link>

                <S.CardFaseBlack>
                  <S.NumberTextData>
                    {QuantlotesCatalogacao == 0 && <S.DataFaseTxt>nenhum está na Catalogação</S.DataFaseTxt>}

                    {QuantlotesCatalogacao == 1 && (
                      <S.NumberName>
                        <S.NumberTxt>
                          <S.NumberGreen>{QuantlotesCatalogacao}</S.NumberGreen>
                        </S.NumberTxt>
                        <S.DataFaseTxt>está na Catalogação</S.DataFaseTxt>
                      </S.NumberName>
                    )}

                    {QuantlotesCatalogacao != undefined && QuantlotesCatalogacao > 1 && (
                      <S.NumberName>
                        <S.NumberTxt>
                          <S.NumberGreen>{QuantlotesCatalogacao}</S.NumberGreen>
                        </S.NumberTxt>
                        <S.DataFaseTxt>estão na Catalogação</S.DataFaseTxt>
                      </S.NumberName>
                    )}
                  </S.NumberTextData>
                </S.CardFaseBlack>
              </S.ContainerDataFase>

              {/* DIGITALIZAÇÃO */}
              <S.ContainerDataFase>
                <Link to={`/Fases/Board/Digitalização`} className="DigitalTooltip">
                  <S.CardFaseColorful style={{ backgroundColor: theme.colors['blue/400'] }}>
                    <img src="/icon-big/IconScanner.svg" />
                  </S.CardFaseColorful>
                  <Tooltip
                    children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Digitalização</p>}
                    anchorSelect=".DigitalTooltip"
                    place="bottom"
                  />
                </Link>

                <S.CardFaseBlack>
                  <S.NumberTextData>
                    {QuantlotesDigitalizacao == 0 && <S.DataFaseTxt>nenhum está na Digitalização</S.DataFaseTxt>}

                    {QuantlotesDigitalizacao == 1 && (
                      <S.NumberName>
                        <S.NumberTxt>
                          <S.NumberGreen>{QuantlotesDigitalizacao}</S.NumberGreen>
                        </S.NumberTxt>
                        <S.DataFaseTxt>está na Digitalização</S.DataFaseTxt>
                      </S.NumberName>
                    )}

                    {QuantlotesDigitalizacao != undefined && QuantlotesDigitalizacao > 1 && (
                      <S.NumberName>
                        <S.NumberTxt>
                          <S.NumberGreen>{QuantlotesDigitalizacao}</S.NumberGreen>
                        </S.NumberTxt>
                        <S.DataFaseTxt>estão na Digitalização</S.DataFaseTxt>
                      </S.NumberName>
                    )}
                  </S.NumberTextData>
                </S.CardFaseBlack>
              </S.ContainerDataFase>

              {/* UPLOAD */}
              <S.ContainerDataFase>
                <Link to={`/Fases/Board/Upload`} className="UploadTooltip">
                  <S.CardFaseColorful style={{ backgroundColor: theme.colors['purple/600'] }}>
                    <img src="/icon-big/IconUpload.svg" />
                  </S.CardFaseColorful>
                  <Tooltip
                    children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Upload</p>}
                    anchorSelect=".UploadTooltip"
                    place="bottom"
                  />
                </Link>

                <S.CardFaseBlack>
                  <S.NumberTextData>
                    {QuantlotesUpload == 0 && <S.DataFaseTxt>nenhum está no Upload</S.DataFaseTxt>}

                    {QuantlotesUpload == 1 && (
                      <S.NumberName>
                        <S.NumberTxt>
                          <S.NumberGreen>{QuantlotesUpload}</S.NumberGreen>
                        </S.NumberTxt>
                        <S.DataFaseTxt>está no Upload</S.DataFaseTxt>
                      </S.NumberName>
                    )}

                    {QuantlotesUpload != undefined && QuantlotesUpload > 1 && (
                      <S.NumberName>
                        <S.NumberTxt>
                          <S.NumberGreen>{QuantlotesUpload}</S.NumberGreen>
                        </S.NumberTxt>
                        <S.DataFaseTxt>estão no Upload</S.DataFaseTxt>
                      </S.NumberName>
                    )}
                  </S.NumberTextData>
                </S.CardFaseBlack>
              </S.ContainerDataFase>

              {/* ARQUIVAMENTO */}
              <S.ContainerDataFase>
                <Link to={`/Fases/Board/Arquivamento`} className="ArquivTooltip">
                  <S.CardFaseColorful style={{ backgroundColor: theme.colors['green/400'] }}>
                    <img src="/icon-big/IconCheckFile.svg" />
                  </S.CardFaseColorful>
                  <Tooltip
                    children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Arquivamento</p>}
                    anchorSelect=".ArquivTooltip"
                    place="bottom"
                  />
                </Link>

                <S.CardFaseBlack>
                  <S.NumberTextData>
                    {QuantlotesArquivados == 0 && <S.DataFaseTxt>nenhum foi arquivado</S.DataFaseTxt>}

                    {QuantlotesArquivados == 1 && (
                      <S.NumberName>
                        <S.NumberTxt>
                          <S.NumberGreen>{QuantlotesArquivados}</S.NumberGreen>
                        </S.NumberTxt>
                        <S.DataFaseTxt>foi arquivado</S.DataFaseTxt>
                      </S.NumberName>
                    )}

                    {QuantlotesArquivados != undefined && QuantlotesArquivados > 1 && (
                      <S.NumberName>
                        <S.NumberTxt>
                          <S.NumberGreen>{QuantlotesArquivados}</S.NumberGreen>
                        </S.NumberTxt>
                        <S.DataFaseTxt>foram arquivados</S.DataFaseTxt>
                      </S.NumberName>
                    )}
                  </S.NumberTextData>
                </S.CardFaseBlack>
              </S.ContainerDataFase>
            </S.FasesDoMeio>
          )}
        </S.PainelPorFaseLotes>
      </S.ContainerData>
    </S.Wrapper>
  );
};
