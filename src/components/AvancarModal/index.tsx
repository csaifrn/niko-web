import * as S from './styles';

interface AvancarModalProps {
  close: () => void;
}

export const AvancarModal = (props: AvancarModalProps) => {
  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea>
          <S.ModalContent>
            <S.NameClose>
              <S.Titulo> Deseja avançar para fase? </S.Titulo>
            </S.NameClose>
            <S.Recused onClick={props.close}><S.Texto>Não, não quero.</S.Texto></S.Recused>
            <S.Avancar onClick={props.close}>
              <S.IconeAvancar src="/avancar.svg"></S.IconeAvancar>
              <S.Texto>Avançar fase</S.Texto>
            </S.Avancar>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
