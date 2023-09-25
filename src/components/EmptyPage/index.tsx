import * as S from './styles';

interface EmptyProps {
  error: string;
}

export const Empty = (props: EmptyProps) => {
  return (
    <S.Wrapper>
      <S.EmptyImg src="/Empty.svg" alt="Página vazia" />
      <S.Title>Está página parece vazia! Tente vasculhar outro lugar.</S.Title>
      <S.Text>{props.error !== null ? props.error : 'Página vazia.'}</S.Text>
      <S.Container>
        <S.LinkHomePage href="/Projetos">Voltar a homepage</S.LinkHomePage>
      </S.Container>
    </S.Wrapper>
  );
};
