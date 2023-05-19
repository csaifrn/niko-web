interface IDataFaseProps {
  recepcao: number,
  preparo: number,
  catalogacao: number,
  digitalizacao: number,
  upload: number,
  arquivados: number,
  percentageCallback: (valor: number) => void | null;
}
import { useEffect } from "react";
import * as S from "./styles";

export const DataFase = (Props : IDataFaseProps) => {


  const total = Props.recepcao + Props.preparo + Props.catalogacao + Props.digitalizacao + Props.upload + Props.arquivados;

  const calPercentage = (fase: number) => {
    return (fase/total*100).toFixed(1)
  }

  const calPercentageNumber = (fase: number) => {
    return Math.round( (fase/total*100) * 1e2 ) / 1e2
  }
  
  useEffect(() => {
    Props.percentageCallback(calPercentageNumber(Props.arquivados))
  }, []);

  return (
    <>
    <div style={{padding: '2em 2em 0 2em', display: 'flex', gap: '1em', alignItems: 'center' }}>
      <h1 style={{color: '#F3802D'}}>{total}</h1>
      <h2> Lotes</h2>
    </div>
    <S.DataUser>
      
    <S.SideUser>
      <S.Fase>
        <S.Icon src="/icon-page/recebidos.png"></S.Icon>
        <div>
          <S.TotalFase>{Props.recepcao} Lotes</S.TotalFase>
          <S.PerecentageFase>{calPercentage(Props.recepcao)}%</S.PerecentageFase>
        </div>
      </S.Fase>
      <S.Fase>
        <S.Icon src="/icon-page/preparo.png"></S.Icon>
        <div>
          <S.TotalFase>{Props.preparo} Lotes</S.TotalFase>
          <S.PerecentageFase>{calPercentage(Props.preparo)}%</S.PerecentageFase>
        </div>
      </S.Fase>
      <S.Fase>
        <S.Icon src="/icon-page/catalogacao.png"></S.Icon>
        <div>
        <S.TotalFase>{Props.catalogacao}Lotes</S.TotalFase>
          <S.PerecentageFase>{calPercentage(Props.catalogacao)}%</S.PerecentageFase>
        </div>
      </S.Fase>
    </S.SideUser>
    <S.SideUser>
      <S.Fase>
        <S.Icon src="/icon-page/digitalizacao.png"></S.Icon>
        <div>
        <S.TotalFase>{Props.digitalizacao} Lotes</S.TotalFase>
          <S.PerecentageFase>{calPercentage(Props.digitalizacao)}%</S.PerecentageFase>
        </div>
      </S.Fase>
      <S.Fase>
        <S.Icon src="/icon-page/upload.png"></S.Icon>
        <div>
        <S.TotalFase>{Props.upload} Lotes</S.TotalFase>
          <S.PerecentageFase>{calPercentage(Props.upload)}%</S.PerecentageFase>
        </div>
      </S.Fase>
      <S.Fase>
        <S.Icon src="/icon-page/arquivamento.png"></S.Icon>
        <div>
        <S.TotalFase>{Props.arquivados} Lotes</S.TotalFase>
          <S.PerecentageFase>{calPercentage(Props.arquivados)}%</S.PerecentageFase>
        </div>
      </S.Fase>
    </S.SideUser>
    </S.DataUser>
    </>


  )

}