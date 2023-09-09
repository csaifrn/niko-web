import * as S from './styles';

const Erro404 = () => {
  return (
    <S.Wrapper>
      <S.NotFoundImg src="/404.svg" alt="Imagem com código de erro 404. Pagína não encontrada. " height={'50%'} />
      <S.ContainerImg>
        <S.LinkHomePage href="/Projetos" style={{ color: 'white', textDecoration: 'none' }}>
          Voltar a homepage
        </S.LinkHomePage>
      </S.ContainerImg>
    </S.Wrapper>
  );
};

export default Erro404;
