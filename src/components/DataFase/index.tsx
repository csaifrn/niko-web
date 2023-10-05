interface IDataFaseProps {
  recepcao: number;
  preparo: number;
  catalogacao: number;
  digitalizacao: number;
  upload: number;
  arquivados: number;
  // eslint-disable-next-line no-unused-vars
  percentageCallback: (valor: number) => void | null;
}
import { useEffect } from 'react';
import * as S from './styles';

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
    <>
      <div style={{ fontFamily: 'Rubik', padding: '2em 2em 0 2em', display: 'flex', gap: '1em', alignItems: 'center' }}>
        <h1 style={{ color: '#F3802D' }}>{total}</h1>
        <h2 style={{ color: '#fff' }}> Lotes</h2>
      </div>
      <S.DataUser>
        <S.SideUser>
          <S.Fase>
            <S.Icon src="/icon-small/Recepção.svg"></S.Icon>
            <div>
              <S.TotalFase>{Props.recepcao} Lotes</S.TotalFase>
              <S.PerecentageFase>{calPercentage(Props.recepcao)}%</S.PerecentageFase>
            </div>
          </S.Fase>
          <S.Fase>
            <S.Icon src="/icon-small/Preparo.svg"></S.Icon>
            <div>
              <S.TotalFase>{Props.preparo} Lotes</S.TotalFase>
              <S.PerecentageFase>{calPercentage(Props.preparo)}%</S.PerecentageFase>
            </div>
          </S.Fase>
          <S.Fase>
            <S.Icon src="/icon-small/Catalogação.svg"></S.Icon>
            <div>
              <S.TotalFase>{Props.catalogacao}Lotes</S.TotalFase>
              <S.PerecentageFase>{calPercentage(Props.catalogacao)}%</S.PerecentageFase>
            </div>
          </S.Fase>
        </S.SideUser>
        <S.SideUser>
          <S.Fase>
            <S.Icon src="/icon-small/Digitalização.svg"></S.Icon>
            <div>
              <S.TotalFase>{Props.digitalizacao} Lotes</S.TotalFase>
              <S.PerecentageFase>{calPercentage(Props.digitalizacao)}%</S.PerecentageFase>
            </div>
          </S.Fase>
          <S.Fase>
            <S.Icon src="/icon-small/Upload.svg"></S.Icon>
            <div>
              <S.TotalFase>{Props.upload} Lotes</S.TotalFase>
              <S.PerecentageFase>{calPercentage(Props.upload)}%</S.PerecentageFase>
            </div>
          </S.Fase>
          <S.Fase>
            <S.Icon src="/icon-small/Arquivamento.svg"></S.Icon>
            <div>
              <S.TotalFase>{Props.arquivados} Lotes</S.TotalFase>
              <S.PerecentageFase>{calPercentage(Props.arquivados)}%</S.PerecentageFase>
            </div>
          </S.Fase>
        </S.SideUser>
      </S.DataUser>
    </>
  );
};
