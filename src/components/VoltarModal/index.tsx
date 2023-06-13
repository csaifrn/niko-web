import * as S from './styles';

interface VoltarModalProps {
  close: () => void;
}

export const VoltarModal = (props: VoltarModalProps) => {
  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea>
          <S.ModalContent>
            <S.NameClose>
              <h2> Deseja voltar fase? </h2>
              <button onClick={props.close} style={{ width: 'auto', backgroundColor: 'transparent', border: 'none' }}>
              </button>
            </S.NameClose>
            <S.Recused onClick={props.close}><p>Não, não quero.</p></S.Recused>
            <S.Voltar onClick={props.close}>
              <img src="/voltar_black.svg"></img>
              <p>Voltar fase</p>
            </S.Voltar>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
