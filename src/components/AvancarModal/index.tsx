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
              <h2> Deseja avançar fase? </h2>
              <button onClick={props.close} style={{ width: 'auto', backgroundColor: 'transparent', border: 'none' }}>
              </button>
            </S.NameClose>
            <S.Recused onClick={props.close}><p>Não, não quero.</p></S.Recused>
            <S.Avancar onClick={props.close}>
              <img src="/avancar_black.svg"></img>
              <p>Avançar fase</p>
            </S.Avancar>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
