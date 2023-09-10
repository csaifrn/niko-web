import * as S from './styles';

export const ValoresGerais = () => {
  const valores = {
    concluidos: 23,
    cadastrados: 1450,
    digitalizados: 21133,
    upload: 1230,
  };

  return (
    <S.Wrapper>
      <S.TituloH2>Valores Gerais</S.TituloH2>
      <S.ContainerValorGeral>
        <S.ValorGeral>
          <S.TituloH3>
            <S.TextGreen>{valores.concluidos}</S.TextGreen>
          </S.TituloH3>
          <S.Text>Lotes Concluídos</S.Text>
        </S.ValorGeral>
        <S.ValorGeral>
          <S.TituloH3>
            <S.TextGreen>{valores.cadastrados}</S.TextGreen>
          </S.TituloH3>
          <S.Text>Cadastrados</S.Text>
        </S.ValorGeral>
        <S.ValorGeral>
          <S.TituloH3>
            <S.TextBlue>{valores.digitalizados}</S.TextBlue>
          </S.TituloH3>
          <S.Text>Folhas digitalizadas</S.Text>
        </S.ValorGeral>
        <S.ValorGeral>
          <S.TituloH3>
            <S.TextPurple>{valores.upload}</S.TextPurple>
          </S.TituloH3>
          <S.Text>Uploads</S.Text>
        </S.ValorGeral>
      </S.ContainerValorGeral>
    </S.Wrapper>
  );
};
