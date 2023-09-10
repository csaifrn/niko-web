import * as S from './styles';

const Unauthorized = () => {
  return (
    <S.Wrapper>
      <S.UnauthorizedImg src="/Unauthorized.svg" alt="Erro 404" />
      <S.Container>
        <S.LinkHomePage href="/Projetos">Voltar a homepage</S.LinkHomePage>
      </S.Container>
    </S.Wrapper>
  );
};

export default Unauthorized;
