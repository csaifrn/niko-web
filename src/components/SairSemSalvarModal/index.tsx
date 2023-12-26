import { useState, useEffect } from 'react';
import * as S from './style';
import { Link, useNavigate, useParams } from 'react-router-dom';

interface SairSemSalvarModalProps {
  close: () => void;
}

export const SairSemSalvarModal = (props: SairSemSalvarModalProps) => {
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
              <h2>Deseja sair sem salvar? Todas as alterações serão descartadas</h2>
            </S.NameClose>
            <S.Recused onClick={handleClose}>Cancelar</S.Recused>
            <S.Delete onClick={() => navigate(-1)}>Sair</S.Delete>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
