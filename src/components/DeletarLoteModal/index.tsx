import * as S from './styles';

interface DeletarModalProps {
  close: () => void;
}

export const DeletarLoteModal = (props: DeletarModalProps) => {
  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea>
          <S.ModalContent>
            <S.NameClose>
              <h2> Deseja apagar o lote? </h2>
              <button onClick={props.close} style={{ width: 'auto', backgroundColor: 'transparent', border: 'none' }}>
              </button>
            </S.NameClose>
            <S.Recused onClick={props.close}><p>Não, não quero.</p></S.Recused>
            <S.Delete onClick={props.close}>
              <img src="/trash.svg"></img>
              <p>Deletar Lote</p>
              </S.Delete>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
