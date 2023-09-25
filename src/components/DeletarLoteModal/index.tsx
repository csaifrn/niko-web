import { useState, useEffect } from 'react';
import * as S from './styles';

interface DeletarModalProps {
  close: () => void;
}

export const DeletarLoteModal = (props: DeletarModalProps) => {
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
              <h2>Deseja excluir o lote?</h2>
            </S.NameClose>
            <S.Recused onClick={handleClose}>Não, não quero.</S.Recused>
            <S.Delete onClick={handleClose}>Excluir</S.Delete>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
