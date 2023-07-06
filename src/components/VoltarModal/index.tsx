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
              <S.Titulo> Deseja voltar para a fase? </S.Titulo>
            </S.NameClose>
            <S.Recused onClick={props.close}><S.Texto>Não, não quero.</S.Texto></S.Recused>
            <S.Avancar onClick={props.close}>
              <S.IconeAvancar src="/voltar.svg"></S.IconeAvancar>
              <S.Texto>Voltar fase</S.Texto>
            </S.Avancar>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
