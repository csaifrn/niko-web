import { useState, useEffect } from 'react';
import * as S from './styles';
import { useParams } from 'react-router-dom';

interface DeletarModalProps {
  close: () => void;
  delete?: Function;
}

export const DeletarLoteModal = (props: DeletarModalProps) => {
  const [closing, setClosing] = useState(false);
  const { id } = useParams();

  useEffect(() => {
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

  const handleDelete = () => {
    if (props.delete) {
      props.delete(id);
    }
    handleClose();
  };
  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent>
            <S.NameClose>
              <h2>Deseja apagar o lote?</h2>
              <S.Exit type="button" onClick={handleClose}>
                <img src="/close.svg" alt="" height={18} width={18} />
              </S.Exit>
            </S.NameClose>
            <S.Recused onClick={handleDelete}>Não, não quero.</S.Recused>
            <S.Delete onClick={handleClose}>Deletar</S.Delete>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
