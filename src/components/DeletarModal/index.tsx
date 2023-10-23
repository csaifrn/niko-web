import { useState, useEffect } from 'react';
import * as S from './styles';

interface DeletarModalProps {
  title: string;
  close: () => void;
  deleteFunction?: () => void;
}

export const DeletarModal = (props: DeletarModalProps) => {
  const [closing, setClosing] = useState(false);
  useEffect(() => {
    // Ao renderizar o modal, aplicar um escalonamento gradual para exibi-lo
    const timer = setTimeout(() => {
      const modal = document.getElementById('modal-scaling');
      if (closing === false && modal) {
        modal.style.transform = 'scale(1)';
      } else if (modal && closing) {
        modal.style.transform = 'scale(0)';
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [closing]);

  const handleClose = () => {
    if (props.deleteFunction) {
      props.deleteFunction();
    }

    setClosing(true);
    setTimeout(() => {
      props.close();
    }, 300);
  };
  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent>
            <S.NameClose>
              <h2>{props.title}</h2>
              <S.Exit type="button" onClick={handleClose}>
                <img src="/close.svg" alt="" height={18} width={18} />
              </S.Exit>
            </S.NameClose>
            <S.Recused onClick={props.close}>Não, não quero.</S.Recused>
            <S.Delete onClick={handleClose}>Deletar</S.Delete>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
