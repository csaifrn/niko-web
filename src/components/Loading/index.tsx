import * as S from './styles';

type LoadingProps = {
  center?: boolean;
};

export const Loading = ({ center }: LoadingProps) => {
  return (
    <S.Container data-testid="loading" center={center}>
      <S.Loading />
    </S.Container>
  );
};
