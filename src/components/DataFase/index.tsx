import { useEffect } from 'react';
import * as S from './styles';
import theme from '../../global/theme';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { CheckCircle, Circle, Pause } from 'phosphor-react';

interface IDataFaseProps {
  available_batches_count: number;
  in_progress_batches_count: number;
  archiving_done_batches_count: number;
  recepcao: number;
  preparo: number;
  catalogacao: number;
  digitalizacao: number;
  upload: number;
  arquivados: number;
  // eslint-disable-next-line no-unused-vars
  percentageCallback: (valor: number) => void | null;
}

export const DataFase = (Props: IDataFaseProps) => {
  const total =
    Props.recepcao + Props.preparo + Props.catalogacao + Props.digitalizacao + Props.upload + Props.arquivados;

  const calPercentage = (fase: number) => {
    return ((fase / total) * 100).toFixed(1);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calPercentageNumber = (fase: number) => {
    return Math.round((fase / total) * 100 * 1e2) / 1e2;
  };

  useEffect(() => {
    Props.percentageCallback(calPercentageNumber(Props.arquivados));
  }, [Props, calPercentageNumber]);

  return (
    <S.ClassesData>
      {/* FASES */}
      <S.DataUser>
        <S.SideUser>
          {/* Recepção */}
          {/* <S.Fase>
            <S.Icon src="/icon-small/Recepção.svg"></S.Icon>
            <div>
              <S.TotalFase>{Props.recepcao} Lotes</S.TotalFase>
              <S.PerecentageFase>{calPercentage(Props.recepcao)}%</S.PerecentageFase>
            </div>
          </S.Fase> */}

          {/* Preparo */}
          <S.Fase>
            <Link to="/Fases/Board/Preparo" className="PreparoTooltip" style={{ width: '46px', height: '46px' }}>
              <S.Icon src="/icon-small/Preparo.svg"></S.Icon>
              <Tooltip className="Preparo" anchorSelect=".PreparoTooltip" place="top">
                Preparo
              </Tooltip>
            </Link>

            <div>
              {Props.preparo == 0 && <S.TotalFase>nenhum lote</S.TotalFase>}
              {Props.preparo == 1 && <S.TotalFase>{Props.preparo} lote</S.TotalFase>}
              {Props.preparo > 1 && <S.TotalFase>{Props.preparo} lotes</S.TotalFase>}
              <S.PerecentageFase>{calPercentage(Props.preparo)}%</S.PerecentageFase>
            </div>
          </S.Fase>

          {/* Catalogação */}
          <S.Fase>
            <Link
              to="/Fases/Board/Catalogação"
              className="CatalogaçãoTooltip"
              style={{ width: '46px', height: '46px' }}
            >
              <S.Icon src="/icon-small/Catalogação.svg"></S.Icon>
              <Tooltip className="Catalogação" anchorSelect=".CatalogaçãoTooltip" place="top">
                Catalogação
              </Tooltip>
            </Link>
            <div>
              {Props.catalogacao == 0 && <S.TotalFase>nenhum lote</S.TotalFase>}
              {Props.catalogacao == 1 && <S.TotalFase>{Props.catalogacao} lote</S.TotalFase>}
              {Props.catalogacao > 1 && <S.TotalFase>{Props.catalogacao} lotes</S.TotalFase>}
              <S.PerecentageFase>{calPercentage(Props.catalogacao)}%</S.PerecentageFase>
            </div>
          </S.Fase>
        </S.SideUser>

        <S.SideUser>
          {/* Digitalização */}
          <S.Fase>
            <Link
              to="/Fases/Board/Digitalização"
              className="DigitalizaçãoTooltip"
              style={{ width: '46px', height: '46px' }}
            >
              <S.Icon src="/icon-small/Digitalização.svg"></S.Icon>
              <Tooltip className="Digitalização" anchorSelect=".DigitalizaçãoTooltip" place="top">
                Digitalização
              </Tooltip>
            </Link>
            <div>
              {Props.digitalizacao == 0 && <S.TotalFase>nenhum lote</S.TotalFase>}
              {Props.digitalizacao == 1 && <S.TotalFase>{Props.digitalizacao} lote</S.TotalFase>}
              {Props.digitalizacao > 1 && <S.TotalFase>{Props.digitalizacao} lotes</S.TotalFase>}
              <S.PerecentageFase>{calPercentage(Props.digitalizacao)}%</S.PerecentageFase>
            </div>
          </S.Fase>
          {/* Upload */}
          <S.Fase>
            <Link to="/Fases/Board/Upload" className="UploadTooltip" style={{ width: '46px', height: '46px' }}>
              <S.Icon src="/icon-small/Upload.svg"></S.Icon>
              <Tooltip className="Upload" anchorSelect=".UploadTooltip" place="top">
                Upload
              </Tooltip>
            </Link>
            <div>
              {Props.upload == 0 && <S.TotalFase>nenhum lote</S.TotalFase>}
              {Props.upload == 1 && <S.TotalFase>{Props.upload} lote</S.TotalFase>}
              {Props.upload > 1 && <S.TotalFase>{Props.upload} lotes</S.TotalFase>}
              <S.PerecentageFase>{calPercentage(Props.upload)}%</S.PerecentageFase>
            </div>
          </S.Fase>
          {/* Arquivamento */}
          <S.Fase>
            <Link
              to="/Fases/Board/Arquivamento"
              className="ArquivamentoTooltip"
              style={{ width: '46px', height: '46px' }}
            >
              <S.Icon src="/icon-small/Arquivamento.svg"></S.Icon>
              <Tooltip className="Arquivamento" anchorSelect=".ArquivamentoTooltip" place="top">
                Arquivamento
              </Tooltip>
            </Link>
            <div>
              {Props.arquivados == 0 && <S.TotalFase>nenhum lote</S.TotalFase>}
              {Props.arquivados == 1 && <S.TotalFase>{Props.arquivados} lote</S.TotalFase>}
              {Props.arquivados > 1 && <S.TotalFase>{Props.arquivados} lotes</S.TotalFase>}
              <S.PerecentageFase>{calPercentage(Props.arquivados)}%</S.PerecentageFase>
            </div>
          </S.Fase>
        </S.SideUser>
      </S.DataUser>

      {/* STATUS */}
      <S.StatusDiv style={{}}>
        {/* Lotes DISPONÍVEIS */}

        <S.StatusDiv style={{ padding: '0', alignItems: 'flex-start', gap: '8px' }}>
          <S.IconDiv className="AvailableTooltip">
            <Circle size={20} weight="fill" style={{ color: theme.colors['green/500'] }} />
            {/* <Tooltip children={<p>Lotes disponíveis</p>} anchorSelect=".AvailableTooltip"></Tooltip> */}
          </S.IconDiv>
          <h2>Disponíveis</h2>
          <S.StatusText style={{ color: theme.colors['green/500'] }}>{Props.available_batches_count}</S.StatusText>
        </S.StatusDiv>

        {/* {Props.available_batches_count == 0 && (
          <S.StatusEspecificDiv>
            <S.StatusText style={{ color: theme.colors['white'] }}>Nenhum</S.StatusText>
            <S.StatusText style={{ color: theme.colors['white'] }}>disponível</S.StatusText>
          </S.StatusEspecificDiv>
        )}
        {Props.available_batches_count == 1 && (
          <S.StatusEspecificDiv>
            <S.StatusText style={{ color: theme.colors['green/500'] }}>{Props.available_batches_count}</S.StatusText>
            <S.StatusText style={{ color: theme.colors['white'] }}>disponível</S.StatusText>
          </S.StatusEspecificDiv>
        )}
        {Props.available_batches_count > 1 && (
          <S.StatusEspecificDiv>
            <S.StatusText style={{ color: theme.colors['green/500'] }}>{Props.available_batches_count}</S.StatusText>
            <S.StatusText style={{ color: theme.colors['white'] }}>disponíveis</S.StatusText>
          </S.StatusEspecificDiv>
        )} */}

        {/* Lotes EM ANDAMENTO */}

        <S.StatusDiv style={{ padding: '0', alignItems: 'flex-start', gap: '8px' }}>
          <S.IconDiv className="InProgressTooltip">
            <Pause size={20} weight="fill" />
            {/* <Tooltip children={<p>Lotes em andamento</p>} anchorSelect=".InProgressTooltip"></Tooltip> */}
          </S.IconDiv>
          <h2>Em andamento</h2>

          <S.StatusText>{Props.in_progress_batches_count}</S.StatusText>
        </S.StatusDiv>

        {/* {Props.in_progress_batches_count == 0 && <h2>Nenhum em andamento</h2>}
        {Props.in_progress_batches_count >= 1 && (
          <S.StatusEspecificDiv>
            <S.StatusText>{Props.in_progress_batches_count}</S.StatusText>
            <S.StatusText style={{ color: theme.colors['white'] }}>em andamento</S.StatusText>
          </S.StatusEspecificDiv>
        )} */}

        {/* Lotes ARQUIVADOS */}

        <S.StatusDiv style={{ padding: '0', alignItems: 'flex-start', gap: '8px' }}>
          <S.IconDiv className="ArchivingTooltip">
            <CheckCircle size={20} weight="fill" />
            {/* <Tooltip children={<p>Lotes arquivados</p>} anchorSelect=".ArchivingTooltip"></Tooltip> */}
          </S.IconDiv>
          <h2>Arquivados</h2>

          <S.StatusText style={{ color: theme.colors['green/500'] }}>{Props.archiving_done_batches_count}</S.StatusText>
        </S.StatusDiv>

        {/* {Props.archiving_done_batches_count == 0 && <h2>Nenhum foi arquivado</h2>}
        {Props.archiving_done_batches_count == 1 && (
          <S.StatusEspecificDiv>
            <S.StatusText style={{ color: theme.colors['green/500'] }}>
              {Props.archiving_done_batches_count}
            </S.StatusText>
            <S.StatusText style={{ color: theme.colors['white'] }}>arquivado</S.StatusText>
          </S.StatusEspecificDiv>
        )}
        {Props.archiving_done_batches_count > 1 && (
          <S.StatusEspecificDiv>
            <S.StatusText style={{ color: theme.colors['green/500'] }}>
              {Props.archiving_done_batches_count}
            </S.StatusText>
            <S.StatusText style={{ color: theme.colors['white'] }}>arquivados</S.StatusText>
          </S.StatusEspecificDiv>
        )} */}
      </S.StatusDiv>
    </S.ClassesData>
  );
};
