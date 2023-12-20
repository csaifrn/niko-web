import { useState, useEffect } from 'react';
import * as S from './style';
import { Link, useNavigate, useParams } from 'react-router-dom';

interface SairSemSalvarModalProps {
  close: () => void;
  salvar: any;
}

export const ModalConfirmarEdit = (props: SairSemSalvarModalProps) => {
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

  const navigate = useNavigate();

  // const handleDelete = () => {
  //   if (props.delete) {
  //     props.delete();
  //   }
  //   handleClose();
  // };

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent>
            <S.NameClose>
              <h2>Deseja confirmar as alterações feitas?</h2>
            </S.NameClose>
            <S.Recused onClick={handleClose}>Não, não quero.</S.Recused>
            <S.ConfirmAlterações>Confirmar alterações</S.ConfirmAlterações>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
