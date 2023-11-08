import { useState, useEffect } from 'react';
import * as S from './style';
import { Link, useParams } from 'react-router-dom';

interface DeletarModalProps {
  close: () => void;
  delete?: () => void;
}

export const SairSemSalvarModal = (props: DeletarModalProps) => {
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
      props.delete();
    }
    handleClose();
  };
  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent>
            <S.NameClose>
              <h2>Deseja sair sem salvar as informações?</h2>
            </S.NameClose>
            <S.Recused onClick={handleClose}>Não, não quero.</S.Recused>

            <Link to={`/Atividades/${id}`}>
              <S.Delete>Sair</S.Delete>
            </Link>
            
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
